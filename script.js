//returns the randomly selected computer selection
function computerPlay() {
    let computerChoice = "default";
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    //    console.log(randomNumber);
    switch (true) {
        case randomNumber <= 33:
            //            console.log("less than 33");
            computerChoice = "rock";
            break;
        case randomNumber <= 66:
            //            console.log("less than 66");
            computerChoice = "paper";
            break;
        case randomNumber <= 99:
            //            console.log("less than 99");
            computerChoice = "scissors";
            break;
        //        default: console.log("switchrunning");
    }
    randomNumber = +1;
    //    console.log(computerChoice);
    return computerChoice;
}

//compares the selections to find the result of the round
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection == computerSelection:
            return ["You both picked the same so that was a draw", 0];
        case playerSelection == "rock" && computerSelection == "scissors":
            return ["You picked rock and they picked scissors, you win", 1];
        case playerSelection == "rock" && computerSelection == "paper":
            return ["You picked rock and they picked paper, you lose", -1];
        case playerSelection == "paper" && computerSelection == "scissors":
            return ["You picked paper and they picked scissors, you lose", -1];
        case playerSelection == "paper" && computerSelection == "rock":
            return ["You picked paper and they picked rock, you win", 1];
        case playerSelection == "scissors" && computerSelection == "paper":
            return ["You picked scissors and they picked paper, you win", 1];
        case playerSelection == "scissors" && computerSelection == "rock":
            return ["You picked scissors and they picked rock, you lose", -1];
        default:
            return ["You did not enter a valid choice", 0];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = "";
    console.log("welcome to the game");
    for (let i = 0; i < 5; i++) {

        // start of the round
        console.log("round " + (i + 1));

        //collects the player selection
        const message = "Enter your choice, rock, paper or scissors";
        const playerSelection = (window.prompt(message).toLowerCase());

        //collects the computer selection
        const computerSelection = computerPlay();

        round = playRound(playerSelection, computerSelection);
        console.log(round[0]);

        //add round score to total
        if (round[1] == 1) {
            playerScore += 1;
        } else if (round[1] == -1) {
            computerScore += 1;
        }

        // end of the round
        console.log("round " + (i + 1) + " complete.");
    }

    //determine final result text
    if (playerScore == computerScore) {
        result = "draw";
    } else if (playerScore > computerScore) {
        result = "win";
    } else {
        result = "lose";
    }

    //display the result
    console.log("You scored " + playerScore + ", the computer scored "
        + computerScore + " hence you " + result);

}

game()