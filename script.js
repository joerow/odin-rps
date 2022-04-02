//returns the randomly selected computer choice
function computerPlay(){
    let computerChoice="default";
    let randomNumber = Math.floor(Math.random()*100) + 1;
    console.log(randomNumber);
    switch(true){
        case randomNumber<=33:
            console.log("less than 33");
            computerChoice = "rock";
            break;
        case randomNumber<=66:
            console.log("less than 66");
            computerChoice = "paper";
            break;
        case randomNumber<=99:
            console.log("less than 99");
            computerChoice = "scissors";
            break;
        default: console.log("switchrunning");
    }
    randomNumber =+1;
    console.log(computerChoice);
    return computerChoice;
}

//returns the result of the round
function playRound(playerSelection, computerSelection) {
    switch(true){
        case playerSelection==computerSelection:
            return "you both picked the same so that was a draw";
        case playerSelection=="rock" && computerSelection =="scissors":
            return "You picked rock and they picked scissors, you win";
        case playerSelection=="rock" && computerSelection =="paper":
            return "You picked rock and they picked paper, you lose";
        case playerSelection=="paper" && computerSelection =="scissors":
            return "You picked paper and they picked scissors, you lose";
        case playerSelection=="paper" && computerSelection =="rock":
            return "You picked paper and they picked rock, you win";
        case playerSelection=="scissors" && computerSelection =="paper":
            return "You picked scissors and they picked paper, you win";
        case playerSelection=="scissors" && computerSelection =="rock":
            return "You picked scissors and they picked rock, you lose";
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));