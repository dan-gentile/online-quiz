// define variables -timer-
let timer = document.getElementById('timer');
let start = document.getElementById('start');
let quizBox = document.getElementById('quiz-box')
let headlineElement = document.getElementById('headline');
let pElement = document.getElementById('p');



let secondsLeft = 60;
let questionIndex = 0;

let questionList = [
    {
        question: 'How is the current mens 5000m World Record Holder?',
        choice0: 'Cheptegei',
        choice1: 'Bekele',
        choice2: 'Engels',
        choice3: 'Your Mom',
        correct: '1'
    }
]






start.addEventListener('click', function () {
    let timerInterval = setInterval(function () {
        timer.textContent = secondsLeft;
        secondsLeft--;
        
        if (secondsLeft === -1) {
            clearInterval(timerInterval);
            // sendMessage();
        }

    }, 100);
    start.remove();
    nextQuestion();
    
})

function nextQuestion(){
    pElement.remove();
    headlineElement.textContent = `${questionList[questionIndex].question}`;
    
    for(i = 0; i < 4; i++){
       let answerButton = document.createElement('button');
        answerButton.id = 'choice' + `${[i]}`;
        answerButton.className = 'answerBtn';
        quizBox.appendChild(answerButton);
    }
    choice0.innerText = `${questionList[questionIndex].choice0}`;
    choice1.innerText = `${questionList[questionIndex].choice1}`;
    choice2.innerText = `${questionList[questionIndex].choice2}`;
    choice3.innerText = `${questionList[questionIndex].choice3}`;

}




function sendMessage() {
    headlineElement.textContent = 'Sorry Times Up!';
    let reset = document.createElement('button');
    reset.textContent = 'Restart';
    reset.id = 'reset';
    quizBox.appendChild(reset);

}