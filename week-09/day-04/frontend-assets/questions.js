'use stcit';

const newQuestionArea = document.querySelector('.new-question');

const questionsArea = document.querySelector('.questions');

let radioButtons = document.querySelectorAll('input[type="radio"]');

const getAllQuestion = () => {
  const URL = '/api/questions'
  return fetch(URL);
}

const loadQuestions = () => {
  getAllQuestion()
  .then(response => response.json())
  .then(questions => {
    while(questionsArea.firstChild) {
      questionsArea.removeChild(questionsArea.firstChild);
    }
    questions.forEach((question, index) => {
      const container = document.createElement('div');
      container.classList.add('question');
      container.setAttribute('data-id', question.id);
      const questionP = document.createElement('p');
      questionP.textContent = question.question;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.classList.add('delete-button');
      container.appendChild(questionP);
      container.appendChild(deleteButton);
      questionsArea.appendChild(container);
    });
    questionsArea.onclick = deleteQuestion;
    newQuestionArea.onclick = submitQuestion;
    })
  .catch(console.log);
}

const submitQuestion = (event) => {
  radioButtons = document.querySelectorAll('input[type="radio"]');
  let radioValues = [];
  radioButtons.forEach(button => radioValues.push(button.checked));
  if (event.target.getAttribute('type') == 'text') {
    event.target.value = '';
  }
  else if (event.target.id == 'submit-button') {
    
    event.preventDefault();
    const questionField = newQuestionArea.querySelector('#question-question');
    const answerFields = newQuestionArea.querySelectorAll('.answer-text');
    console.log(answerFields);
    let answers = []
    answerFields.forEach(answer => {
      answers.push(answer.value)
    });
    let answersNotEmpty = answers.every(value => value != '');
    let checkedRadio = null;
    radioValues.forEach((value, index) => value == true? checkedRadio = index:null);
    if(!questionField.value == '' && answersNotEmpty && checkedRadio != null){
      let newQuestion = {};
      newQuestion.question = questionField.value;
      let answerObjects = [];
      answers.forEach((answer, index) => {
        let answerObject = {};
        answerObject[`answer_${index+1}`] = answer;
        answerObject['is_correct'] = radioValues[index];
        answerObjects.push(answerObject);
      });
      newQuestion.answers = answerObjects;
      console.log(newQuestion);
      const url = ('/api/questions/');
    fetch(url, {
      method: "POST",
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrer: "no-referrer", 
      body: JSON.stringify(newQuestion)
    })
    .then(loadQuestions)
    .catch(console.log);
    }
    else {alert('Please fill all fields!')}
  }
  else{
}
}

const deleteQuestion = (event) => {
  event.stopPropagation();
  if (event.target.classList.contains('delete-button')){
    const url = (`/api/questions/${event.target.parentElement.dataset.id}`);
    fetch(url, {
      method: "DELETE",
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrer: "no-referrer", 
      body: ''
  })
  .then(loadQuestions)
  .catch(console.log);
  }
} 

window.onload = () => {
  loadQuestions();
}