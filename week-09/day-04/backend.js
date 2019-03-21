'use strict';

const dotenv = require('dotenv');
const express = require('express');
const database = require('./database');
const path = require('path')

const connection = database.connection;

const app = express();
const APP_PORT = 4000;

dotenv.config();

app.use(express.json());
app.use(express.static('frontend-assets'));

app.listen(APP_PORT, () => {
  console.log(`Server is running at ${APP_PORT}`);
  console.log(`Database is ${connection === null ? 'NOT ' : ''}available`);
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend-assets/game.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend-assets/questions.html'));
});

app.get('/api/game', (req, res) => {
  let randomId;
  let question;
  let answers;
  getAllIds()
  .then((rows)=>{
      let ids = rows.map(v => v.id);
      randomId = ids[getARandomNumber(0,ids.length-1)];
      return getQuestion(randomId);
  })
  .then((rows) => {
    question = rows;
    return getAnswers(randomId);
  })
  .then((rows) => {
    answers = rows;
    let response = {
      id: question[0].id,
      question: question[0].question,
      answers: answers
    };
    res.send(response);
  })
  .catch((err) => {
    res.status(500).send();
    console.log(err);
  });
});

app.get('/api/questions', (req, res) => {
  getAllQuestions()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send();
    console.log(err);
  });
});

app.post('/api/questions', (req, res) => {
  const post = (req.body);
  console.log('before question insert');  
  insertNewQuestion(post.question)
  .then((question) => {
    let answerPromises = [];
    post.answers.forEach((answer, index) => {
      answerPromises.push(insertNewAnswer(
        question.insertId, answer[`answer_${index+1}`], answer['is_correct']));
    });
    return Promise.all(answerPromises);    
  })
  .then(() => {
    res.send('OK');
  })
  .catch((err) => {
    res.status(500).send();
    console.log(err);
  });
});

app.delete('/api/questions/:id', (req, res) => {
  const id = req.params.id;
  deleteQuestion(id)
  .then(() => deleteAnswers(id))
  .then(() => {
    res.send('OK');
  })
  .catch((err) => {
    res.status(500).send();
    console.log(err);
  }); 
});

function getARandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getAllIds = () => {
  return new Promise ( (resolve, reject) => {
    connection.query(
    'SELECT id FROM questions',
    (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    },
    )})
}


const getQuestion = (id) => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'SELECT id, question FROM questions WHERE id = ?', [id],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      },
      )
  })
}

const getAnswers = (id) => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'SELECT * FROM answers WHERE question_id = ?', [id],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      },
      )
  })
}

const getAllQuestions = () => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'SELECT * FROM questions',
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      },
    );
  })
}

const insertNewQuestion = (question) => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'INSERT INTO questions (question) VALUES (?)', [question],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      },
    );
  })
}

const insertNewAnswer = (qId, answer, isCorect) => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'INSERT INTO answers (question_id, answer, is_correct) VALUES (?,?,?)', [qId, answer, isCorect],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          // alias is already taken
          resolve(rows);
        }
      },
    );
  })
}
const deleteQuestion = (qId) => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'DELETE FROM questions WHERE id = ?', [qId],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          // alias is already taken
          resolve(rows);
        }
      },
    );
  })
}

const deleteAnswers = (qId) => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'DELETE FROM answers WHERE question_id = ?', [qId],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          // alias is already taken
          resolve(rows);
        }
      },
    );
  })
}

