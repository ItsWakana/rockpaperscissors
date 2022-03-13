
function computerPlay() {
    let value = Math.floor(Math.random() * 3);
    if (value === 0) {
        return "rock";
    } if (value === 1) {
        return "paper";
    } else if (value === 2) {
        return "scissors";
    }
}

function playerChoice() {
    let playerAnswer = prompt("Rock,Paper or Scissors?");
    return (playerAnswer);
}



function playRound(p1,c1) {
    if (p1 === "rock" && c1 === "rock") {
        return ("draw");
    } else if (p1 === "rock" && c1 === "paper") {
        return ("computer win");
    } else if (p1 === "rock" && c1 === "scissors") {
        return ("player win");
    } 
    
    if (p1 === "paper" && c1 === "paper" ) {
        return ("draw");
    } else if (p1 === "paper" && c1 === "rock" ) {
        return ("player win");
    } else if (p1 === "paper" && c1 === "scissors" ) {
        return ("computer win");
    } 
    
    if (p1 === "scissors" && c1 === "scissors") {
        return ("draw");
    } else if (p1 === "scissors" && c1 === "paper" ) {
        return ("player win");
    } else if (p1 === "scissors" && c1 === "rock" ) {
        return ("computer win");
    }
}

const computerSelection = computerPlay();
