//Links to HTML elements
const myCountryFlagElement = document.getElementById('my-country-flag')
const myCountryNameElement = document.getElementById('my-country-name')
const scoreElement = document.getElementById('score')
const roundslElement = document.getElementById('round')
const nextBtnElement = document.getElementById('btn-next-round')
const newBtnElement = document.querySelector("#btn-new-game")
const progressElement = document.getElementById('progress')
const neighbourPanelElement = document.getElementById('neighbours-panel')
const coverElement = document.getElementById('cover-neighbours-panel')
const coverMessageElement = document.getElementById('covermsg')

let shuffledCounties = shuffleArray(countryObjects)
let pickIndx = -1;
let gameRound = 1;
let gameScore = 0;
let successAttempts = -1;
let failAttempts = -1;

function resetGame() {
    shuffledCounties = shuffleArray(countryObjects)
    pickIndx = -1;
    gameRound = 1;
    gameScore = 0;
    scoreElement.innerHTML = gameScore
    startGame()
}

function startGame() {
    //Picking a valid country
    nextBtnElement.disabled = true;
    pickIndx++;
    if (pickIndx === shuffledCounties.length - 1) {
        alert(`No more countries on our database, neew game is starting. Your final score was: ${score}.`)
        resetGame()
    }
    let myCountryInfo = shuffledCounties[pickIndx]

    //Creating the border
    if (!myCountryInfo.borders) {
        startGame();
    } else {
        myCountryFlagElement.innerHTML = country2emoji2(myCountryInfo.code)
        myCountryNameElement.innerHTML = myCountryInfo.name;
        let rightNeighbourCounter = myCountryInfo.borders.length
        let falseNeighboursCounter = rightNeighbourCounter * 2;
        let allNeighboursList = myCountryInfo.borders.slice();
        successAttempts = rightNeighbourCounter;
        failAttempts = rightNeighbourCounter;

        //Picking random false countries
        while (falseNeighboursCounter > 0) {
            let rndindx = Math.floor(Math.random() * 250);
            if (!allNeighboursList.includes(shuffledCounties[rndindx]['code3']) && myCountryInfo.code3 !== shuffledCounties[rndindx]['code3']) {
                allNeighboursList.push(shuffledCounties[rndindx]['code3']);
                falseNeighboursCounter--;
            }
        }
        allNeighboursList = shuffleArray(allNeighboursList)
        neighbourPanelElement.innerHTML = ''

        //Filling the all Neighbours
        allNeighboursList.forEach(neighbours => {
            const addNeighbours = document.createElement("div")

            //Tagging Neighbours with correct/false tags
            if (myCountryInfo.borders.includes(neighbours)) {
                addNeighbours.className = 'neighbour neighbour-is-valid'
            } else {
                addNeighbours.className = 'neighbour neighbour-is-invalid'
            }

            const addNeighboursFlag = document.createElement("div")
            addNeighboursFlag.innerHTML = country2emoji2(allCountries[neighbours].code2)
            addNeighboursFlag.className = 'neighbours-flag'
            const addNeighboursName = document.createElement("div")
            addNeighboursName.innerHTML = allCountries[neighbours].name
            addNeighboursName.className = 'neighbours-name'
            addNeighbours.appendChild(addNeighboursFlag)
            addNeighbours.appendChild(addNeighboursName)
            neighbourPanelElement.appendChild(addNeighbours)
        });
        roundslElement.innerHTML = gameRound
        progressElement.max = successAttempts
        progressElement.value = 0
        coverElement.style.display = 'none'
        coverMessageElement.style.color = '#f1faee'
    }
}

//Game Logic
neighbourPanelElement.addEventListener('click', (e) => {
    if (!e.target.parentNode.className.includes('was-clicked') && e.target.parentNode.className.includes('neighbour')) {
        e.target.parentNode.className += ' was-clicked';
        if (e.target.parentNode.className.includes('neighbour-is-valid')) {
            gameScore += 5;
            successAttempts--;
            progressElement.value++
        } else {
            gameScore -= 3;
            failAttempts--;
        }
        scoreElement.innerHTML = gameScore
        if (failAttempts === 0 || successAttempts === 0) {
            gameRound++;
            coverElement.style.display = 'flex'
            if (failAttempts === 0) {
                coverMessageElement.innerHTML = "Sorry, you lost!"
                coverMessageElement.style.color = '#e63946'
            } else {
                coverMessageElement.innerHTML = "Great work!"
            }
            nextBtnElement.disabled = false;
        }
    }
})

document.addEventListener("DOMContentLoaded", () => {
    startGame()
    newBtnElement.addEventListener("click", () => {
        answer = confirm("Your progress will be lost. Are you sure you want to continue?");
        if (answer) {
            resetGame()
        }
    })
    document.querySelector("#btn-next-round").addEventListener("click", () => {
        startGame()
    })
});

if (navigator.appVersion.indexOf("Macintosh") > 0) {
    document.body.style.fontFamily = '"Open Sans"';
}