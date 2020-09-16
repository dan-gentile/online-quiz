# online-quiz
## Javascript Web App 

![Contents](https://img.shields.io/github/languages/top/dan-gentile/online-quiz)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/online-quiz)

### Table of Contents


- [General Info](#general-info)
- [Technologies](#Technologies)
- [Deployment](Deployment)
- [Screenshots](#screen-shots)


### General Info

This is an online quiz, testing your knowledge on running record holders. Its multiple choice style, timed you have got 60seconds to get through 5 questions. If you get a question wrong you are penalized with a 10 second loss. At the end add you name and submit your time to local storage, then challenge yours friends on your computer to compete against you. 

This project has a main index.html page that contains the quiz along with a separate javascript page 'script.js'. It also has a highscore.html page that contains the high score board, that also has its own javascript page 'script2.js'. Both pages share a CSS sheet. The layout has been created with CSS grid, with mobile-first responsive design in mind. 

This project was built using the following:
- HTML
- CSS
- Javascript

Link to page: <https://dan-gentile.github.io/online-quiz/>

### Technologies

This Projects used:
- [Javascript](https://www.javascript.com/)

### Deployment 
Online quiz is online so just launch in browser to play!. 

### Screen Shots 

--Home Page--
<img width="734" alt="Screen Shot 2020-09-16 at 9 21 51 AM" src="https://user-images.githubusercontent.com/68626350/93366906-a62ee100-f800-11ea-95ee-2165fbc6325c.png">



### Code Snippets 

Asking Questions 
~~~
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
        }else{
            answerButton.id = 'wrong';
        }
        answerButton.addEventListener('click', checkAnswers);
        quizBox.appendChild(answerButton);
    })
}
~~~
Checking answers 
~~~
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
~~~
Sorting the Scores
~~~
highScoreData.sort(function (a, b) {
    return b.score - a.score
})
~~~

### Authors 
- Dan Gentile 

### License 
- Open Source 
