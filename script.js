//returns the randomly selected computer selection
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

//compares the selections to find the result of the round
function playRound(playerSelection, computerSelection) {
    switch(true){
        case playerSelection==computerSelection:
            return "You both picked the same so that was a draw";
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
        default:
            return "You did not enter a valid choice";
    }
  }
  
  //collects the player selection
  const message="Enter your choice, rock, paper or scissors";
  const playerSelection = (window.prompt(message).toLowerCase());

  //collects the computer selection
  const computerSelection = computerPlay();

  //returns the output of the round
  console.log(playRound(playerSelection, computerSelection));