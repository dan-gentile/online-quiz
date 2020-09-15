"use strict";

// define variables -timer-
var timer = document.getElementById('timer');
var start = document.getElementById('start');
var quizBox = document.getElementById('quiz-box');
var headlineElement = document.getElementById('headline');
var pElement = document.getElementById('p');
var secondsLeft = 60;
var questionIndex = 0;
var correctAnswers = 0;
var userData = [];
var questionList = [{
  question: 'How is the current mens 5000m World Record Holder?',
  answer: [{
    text: 'Rob',
    correct: false
  }, {
    text: 'Jon',
    correct: true
  }, {
    text: 'Mike',
    correct: false
  }, {
    text: 'Erick',
    correct: false
  }]
}, {
  question: 'How many lines does a zebra have?',
  answer: [{
    text: '32',
    correct: false
  }, {
    text: '192',
    correct: false
  }, {
    text: '200000',
    correct: true
  }, {
    text: 'oranges',
    correct: false
  }]
}];
start.addEventListener('click', function () {
  var timerInterval = setInterval(function () {
    timer.textContent = secondsLeft;
    secondsLeft--;

    if (secondsLeft === -1) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
  start.remove();
  askQuestion();
});

function askQuestion() {
  pElement.remove();
  headlineElement.textContent = "".concat(questionList[questionIndex].question);
  questionList[questionIndex].answer.forEach(function (answer) {
    var answerButton = document.createElement('button');
    answerButton.classList = 'choice';
    answerButton.innerText = answer.text;

    if (answer.correct === true) {
      answerButton.dataset.correct = answer.correct;
      answerButton.id = 'winner';
    }

    answerButton.addEventListener('click', checkAnswers);
    quizBox.appendChild(answerButton);
  });
}

function checkAnswers(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;

  if (correct !== undefined) {
    document.getElementById('winner').style.backgroundColor = 'green';
    correctAnswers++;
  } else {
    document.getElementById('winner').style.backgroundColor = 'green';
    secondsLeft -= 10;
    timer.textContent = secondsLeft;
  }

  questionIndex++;
  setTimeout(function () {
    resetQuestion();
  }, 500);
}

function resetQuestion() {
  for (i = 0; i < 4; i++) {
    var elem = document.querySelector('.choice');
    elem.parentNode.removeChild(elem);
  }

  if (questionIndex < questionList.length) {
    askQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  headlineElement.textContent = 'You Finished!';
  var resultBox = document.createElement('h3');
  var resultForm = document.createElement('form');
  var submitBtn = document.createElement('button');
  submitBtn.id = 'submit';
  submitBtn.innerText = 'Submit';
  resultForm.id = 'form';
  var resultInput = document.createElement('input');
  resultInput.type = 'text';
  resultInput.placeholder = 'Your name here';
  resultInput.style.textAlign = 'center';
  resultBox.id = 'results';
  resultBox.innerText = 'You got ' + "".concat(correctAnswers, " ") + 'right!';
  quizBox.appendChild(resultBox);
  quizBox.appendChild(resultForm);
  quizBox.appendChild(resultInput);
  quizBox.appendChild(submitBtn);
  secondsLeft = 0;
  inIt();
  submitBtn.addEventListener('click', function () {
    var user = [{
      name: resultInput.value.trim(),
      score: correctAnswers
    }];
    Array.prototype.push.apply(userData, user);
    localStorage.setItem("user", JSON.stringify(userData));
  });
}

function inIt() {
  var storedData = JSON.parse(localStorage.getItem("user"));

  if (storedData !== null) {
    userData = storedData;
  }
}

function sendMessage() {
  for (i = 0; i < 4; i++) {
    var elem = document.querySelector('.choice');
    elem.parentNode.removeChild(elem);
  }

  headlineElement.textContent = 'Sorry Times Up!';
  setTimeout(function () {
    endGame();
  }, 2000);
}