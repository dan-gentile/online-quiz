"use strict";

// This page is linked with highscore.html 
// variables are defined below 
var highScoreData = JSON.parse(localStorage.getItem("user"));
var name = document.getElementById('names');
var showScore = document.getElementById('scores'); // sorting high score data 

highScoreData.sort(function (a, b) {
  return b.score - a.score;
}); // generating high score list 

function generateTable() {
  for (i = 0; i < highScoreData.length; i++) {
    var userName = document.createElement('div');
    var userScore = document.createElement('div');
    userName.innerText = "".concat(highScoreData[i].name);
    userName.className = 'results';
    userScore.innerText = "".concat(highScoreData[i].score);
    userScore.className = 'results';

    if ([i] % 2 != 0) {
      userName.id = 'odd';
      userScore.id = 'odd';
    } else {
      userName.id = 'even';
      userScore.id = 'even';
    }

    name.appendChild(userName);
    showScore.appendChild(userScore);
  }
} // function to switch between pages  


function visitQuizPage() {
  window.location = 'index.html';
} // running table function


generateTable();