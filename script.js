//returns the randomly selected cpu selection
function cpuPlay() {
    let cpuChoice = "default";
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    //    console.log(randomNumber);
    switch (true) {
        case randomNumber <= 33:
            //            console.log("less than 33");
            cpuChoice = "rock";
            break;
        case randomNumber <= 66:
            //            console.log("less than 66");
            cpuChoice = "paper";
            break;
        case randomNumber <= 99:
            //            console.log("less than 99");
            cpuChoice = "scissors";
            break;
        default: cpuChoice = "rock";
    }
    randomNumber = +1;
    //    console.log(cpuChoice);
    return cpuChoice;
}

//compares the selections to find the result of the round
function runRound(playerSelection, cpuSelection) {
    switch (true) {
        case playerSelection == cpuSelection:
            return ["You both picked the same so that was a draw", 0];
        case playerSelection == "rock" && cpuSelection == "scissors":
            return ["You picked rock and they picked scissors, you win", 1];
        case playerSelection == "rock" && cpuSelection == "paper":
            return ["You picked rock and they picked paper, you lose", -1];
        case playerSelection == "paper" && cpuSelection == "scissors":
            return ["You picked paper and they picked scissors, you lose", -1];
        case playerSelection == "paper" && cpuSelection == "rock":
            return ["You picked paper and they picked rock, you win", 1];
        case playerSelection == "scissors" && cpuSelection == "paper":
            return ["You picked scissors and they picked paper, you win", 1];
        case playerSelection == "scissors" && cpuSelection == "rock":
            return ["You picked scissors and they picked rock, you lose", -1];
        default:
            return ["You did not enter a valid choice", 0];
    }
}
let playerScore = 0;
const playerScoreBox = document.querySelector('#player-score');

let cpuScore = 0;
const cpuScoreBox = document.querySelector('#cpu-score');

let result = "";
const roundResult = document.querySelector('.result-box');

let gameOver = false;

function updateScore(update) {
    if (update == 1) {
        playerScore += 1;
    } else if (update == -1) {
        cpuScore += 1;
    } else {
        //do nothing
    }
    cpuScoreBox.textContent = 'CPU score: ' + cpuScore;
    playerScoreBox.textContent = 'Player score: ' + playerScore;
    if (playerScore == 5 || cpuScore == 5) {
        roundResult.textContent = determineWinner() + " wins!";
        gameOver = true;
    }
    if (gameOver){
        const restart = document.createElement('button');
        const gameInfo = document.querySelector('#game-info');
        restart.classList.add('restart-btn');
        restart.textContent = 'Play again!';
        gameInfo.appendChild(restart);
        restart.addEventListener('click', resetGame);
    }
}

function determineWinner() {
    if (playerScore > cpuScore) {
        return "Player"
    } else return "CPU"
}

function playRound(e) {
    if (playerScore < 5 && cpuScore < 5) {
        const cpuSelection = cpuPlay();
        const playerSelection = this.id;
        const playerInfo = document.querySelector('#player-info');
        const cpuInfo = document.querySelector('#cpu-info');
        playerInfo.textContent = "Player chose " + playerSelection;
        cpuInfo.textContent = "CPU chose " + cpuSelection;
        round = runRound(playerSelection, cpuSelection);
        updateScore(round[1]);
    }
}

function game() {
    const playerOptions = document.querySelectorAll('.player-selecton');
    playerOptions.forEach(btn => btn.addEventListener('click', playRound));
}

function resetGame(){
    const gameInfo = document.querySelector('#game-info');
    const restart = document.querySelector('.restart-btn');
    gameInfo.removeChild(restart);
    playerScore = 0;
    cpuScore = 0;
    cpuScoreBox.textContent = 'CPU score: ' + cpuScore;
    playerScoreBox.textContent = 'Player score: ' + playerScore;
    gameOver = false;
    roundResult.textContent = "";
    const playerInfo = document.querySelector('#player-info');
    const cpuInfo = document.querySelector('#cpu-info');
    playerInfo.textContent = "";
    cpuInfo.textContent = "";
}

game()