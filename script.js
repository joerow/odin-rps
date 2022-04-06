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
let cpuScore = 0;
let result = "";
function game() {

    // //    console.log("welcome to the game");
    //     for (let i = 0; i < 5; i++) {

    //         // start of the round
    //         console.log("round " + (i + 1));

    //         //collects the player selection
    //         const message = "Enter your choice, rock, paper or scissors";
    //         const playerSelection = (window.prompt(message).toLowerCase());

    //         //collects the cpu selection
    //         const cpuSelection = cpuPlay();

    //         round = playRound(playerSelection, cpuSelection);
    //         console.log(round[0]);

    //         //add round score to total
    //         if (round[1] == 1) {
    //             playerScore += 1;
    //         } else if (round[1] == -1) {
    //             cpuScore += 1;
    //         }

    //         // end of the round
    //         console.log("round " + (i + 1) + " complete.");
    //     }

    //     //determine final result text
    //     if (playerScore == cpuScore) {
    //         result = "draw";
    //     } else if (playerScore > cpuScore) {
    //         result = "win";
    //     } else {
    //         result = "lose";
    //     }

    //     //display the result
    //     console.log("You scored " + playerScore + ", the cpu scored "
    //         + cpuScore + " hence you " + result);

}

//game()

// function logText(e){
//     console.log(this.id);
//    // e.stopPropagation(); //stop bubbling 
//   }

function updateScore(update) {
    if (update == 1) {
        playerScore += 1;
    } else if (update == -1) {
        cpuScore += 1;
    } else {
        //do nothing
    }
}

function determineWinner(){
    if (playerScore > cpuScore){
        return "Player"
    } else return "CPU"
}

function playRound(e) {
    if (playerScore < 5 && cpuScore < 5) {
        const cpuSelection = cpuPlay();
        const playerSelection = this.id;
        const playerInfo = document.querySelector('.player-info');
        const cpuInfo = document.querySelector('.cpu-info');
        playerInfo.textContent = "Player chose " + playerSelection;
        cpuInfo.textContent = "CPU chose " + cpuSelection;
        round = runRound(playerSelection, cpuSelection);
        console.log(round[0]);
        updateScore(round[1]);
        const playerScoreBox = document.querySelector('#player-score');
        const cpuScoreBox = document.querySelector('#cpu-score');
        cpuScoreBox.textContent = 'CPU score: ' + cpuScore;
        playerScoreBox.textContent = 'Player score: ' + playerScore;
    } else {
        const roundResult = document.querySelector('.result-box');
        roundResult.textContent = determineWinner() + " wins!";

    }
}

const playerOptions = document.querySelectorAll('.player-selecton');
//const cpuSelection = cpuPlay();
playerOptions.forEach(btn => btn.addEventListener('click', playRound));
