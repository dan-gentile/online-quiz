let highScoreData = JSON.parse(localStorage.getItem("user"));
let name = document.getElementById('names');
let showScore = document.getElementById('scores')

highScoreData.sort(function (a, b) {
    return b.score - a.score
})
console.log(highScoreData)


function generateTable() {

    for (i = 0; i < highScoreData.length; i++) {
        let userName = document.createElement('div')
        let userScore = document.createElement('div');
        userName.innerText = `${highScoreData[i].name}`
        userName.className = 'results'
        userScore.innerText = `${highScoreData[i].score}`
        userScore.className = 'results'

        if ([i] % 2 != 0) {
            userName.id = 'odd'
            userScore.id = 'odd'
        } else {
            userName.id = 'even'
            userScore.id = 'even'
        }

        name.appendChild(userName)
        showScore.appendChild(userScore)
    }

}

generateTable()