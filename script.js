// This page is linked with index.html
// define variables -timer-
let timer = document.getElementById('timer');
let start = document.getElementById('start');
let quizBox = document.getElementById('quiz-box');
let headlineElement = document.getElementById('headline');
let pElement = document.getElementById('p');
let highScoreBtn = document.getElementById('quiz-page');

let secondsLeft = 60;
let questionIndex = 0;
let correctAnswers = 0;
let userData = [];

// questions
let questionList = [{
        question: 'Who is the current mens 5000m World Record Holder?',
        answer: [{
                text: 'Bekele',
                correct: false
            },
            {
                text: 'Cheptegei',
                correct: true
            },
            {
                text: 'Gebrselassie',
                correct: false
            },
            {
                text: 'Komen',
                correct: false
            }
        ]
    },
    {
        question: "Who is the women's American record holder in the 1500m",
        answer: [{
                text: 'Simpson',
                correct: false
            },
            {
                text: 'Cranny',
                correct: false
            },
            {
                text: 'Houlihan',
                correct: true
            },
            {
                text: 'Huddle',
                correct: false
            }
        ]

    },
    {
        question: "Who is the men's world record holder in the 800m",
        answer: [{
                text: 'Rudisha',
                correct: true
            },
            {
                text: 'Brazier',
                correct: false
            },
            {
                text: 'Coe',
                correct: false
            },
            {
                text: 'Koskei',
                correct: false
            }
        ]

    },
    {
        question: "Who has the Women's world record in the marathon?",
        answer: [{
                text: 'Keitany',
                correct: false
            },
            {
                text: 'Takahashi',
                correct: false
            },
            {
                text: 'Kosgei',
                correct: true
            },
            {
                text: 'Radcliffe',
                correct: false
            }
        ]

    },
    {
        question: "Who has the Men's world record in the marathon?",
        answer: [{
                text: 'Kipsang',
                correct: false
            },
            {
                text: 'Kipchoge',
                correct: true
            },
            {
                text: 'Tergat',
                correct: false
            },
            {
                text: 'Kimetto',
                correct: false
            }
        ]

    },
]

// start the quiz
start.addEventListener('click', function () {
    let timerInterval = setInterval(function () {
        timer.textContent = secondsLeft;
        secondsLeft--;

        if (secondsLeft === -1) {
            clearInterval(timerInterval);

            sendMessage();
        }

    }, 1000);
    start.remove();
    askQuestion();

})

// asking questions
function askQuestion() {
    pElement.remove();
    headlineElement.textContent = `${questionList[questionIndex].question}`;
    questionList[questionIndex].answer.forEach(answer => {
        let answerButton = document.createElement('button');
        answerButton.classList = 'choice'
        answerButton.innerText = answer.text;
        if (answer.correct === true) {
            answerButton.dataset.correct = answer.correct;
            answerButton.id = 'winner';
        } else {
            answerButton.id = 'wrong';
        }
        answerButton.addEventListener('click', checkAnswers);
        quizBox.appendChild(answerButton);
    })
}

// check the answers
function checkAnswers(e) {
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct;
    if (correct !== undefined) {
        document.getElementById('winner').style.backgroundColor = 'green';
        correctAnswers++;
    } else {
        document.getElementById('winner').style.backgroundColor = 'green';
        // if you get a question wrong, lose 10 seconds 
        secondsLeft -= 10;
        timer.textContent = secondsLeft;
    }
    questionIndex++;

    setTimeout(function () {
        resetQuestion();
    }, 500)

}

// clear out the box for the next question
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

// when you end the game what happens
function endGame() {
    headlineElement.textContent = 'You Finished!';
    let resultBox = document.createElement('h3');
    let resultForm = document.createElement('form');
    let submitBtn = document.createElement('button');
    submitBtn.id = 'submit';
    submitBtn.innerText = 'Submit';
    resultForm.id = 'form';
    let resultInput = document.createElement('input');
    resultInput.type = 'text';
    resultInput.placeholder = 'Your name here';
    resultInput.style.textAlign = 'center';
    resultBox.id = 'results';
    resultBox.innerText = 'You got ' + `${correctAnswers} ` + 'right!';
    quizBox.appendChild(resultBox);
    quizBox.appendChild(resultForm);
    quizBox.appendChild(resultInput);
    quizBox.appendChild(submitBtn);
    inIt();
    secondsLeft = 'a'
    timer.style.visibility = 'hidden'
    document.getElementById('timer-text').style.visibility = 'hidden'


    // submitting you score
    submitBtn.addEventListener('click', function () {
        // making sure name value is added
        if (resultInput.value.trim() === '') {
            alert('Please add your name!')
        } else {
            let user = [{
                score: correctAnswers,
                name: resultInput.value.trim()

            }]
            Array.prototype.push.apply(userData, user);
            localStorage.setItem("user", JSON.stringify(userData));
            document.getElementById('high-score-modal').style.visibility = 'visible'
            submitBtn.id = 'start';
        }
    })
}


function inIt() {
    var storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData !== null) {
        userData = storedData;
    }
}

// if you run out of time 
function sendMessage() {
    for (i = 0; i < 4; i++) {
        var elem = document.querySelector('.choice');
        elem.parentNode.removeChild(elem);
    }
    headlineElement.textContent = 'Sorry Times Up!';

    setTimeout(function () {
        endGame();
    }, 2000)

}
// button to bring you to high score page
function visitHighScores() {
    window.location = 'highscore.html';
}