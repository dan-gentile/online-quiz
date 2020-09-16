"use strict";

var highScoreData = JSON.parse(localStorage.getItem("user"));
var name = document.getElementById('names');
var showScore = document.getElementById('scores');
highScoreData.sort(function (a, b) {
  return b.score - a.score;
});
console.log(highScoreData);

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
}

generateTable();