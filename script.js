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
computerPlay();