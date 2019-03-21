'use strict';

const scoreElement = document.querySelector('h1');
const questionField = document.querySelector('.question-field');
const questionElement = document.querySelector('h2');
const answers = document.querySelector('.answers');

let score = 0;

let currentQuestion;

let answeredQuestions = [];

const getQuestion = () => {
  const URL = '/api/game'
  return fetch(URL);
}

const loadQuestions = () => {
  answers.classList.remove('answered');
  getQuestion()
  .then(response => response.json())
  .then(myJson => {
    scoreElement.textContent = `Score: ${score}`;
    currentQuestion = myJson;
    questionElement.textContent = currentQuestion.question;
    while(answers.firstChild) {
      answers.removeChild(answers.firstChild);
    }
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.classList.add('answer');
      button.textContent = answer.answer;
      answers.appendChild(button);
    });
    answers.onclick = validateAnswer;
  })
  .catch(console.log);
}

const validateAnswer = (event) => {
  event.stopPropagation();
  if (!answers.classList.contains('answered') && event.target.classList.contains('answer')) {
    currentQuestion.answers.some((answer, index) => {
        return answer.answer == event.target.textContent && answer['is_correct'] == 1 ?
          true :
          false;
      }) ?
      (event.target.classList.add('correct'),
        score++) :
      (event.target.classList.add('wrong'),
        currentQuestion.answers.forEach((answer, index) => {
          answer['is_correct'] == 1 ?
            document.querySelectorAll('.answer')[index].classList.add('correct') :
            null;
        }));
    answers.classList.add('answered');
    answeredQuestions.push(currentQuestion.id);
    setTimeout(loadQuestions, 3000);
  }
}

window.onload = loadQuestions;

