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
    console.log(answers);
    if(!questionField.value == '' ){
      console.log('ok');
      
    }
    else {console.log('notOK')}
  }
  else{
  radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((button, index) => {
    console.log(`button${index}`, button.checked);
  })
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