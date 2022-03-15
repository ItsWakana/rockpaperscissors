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
    return playerAnswer;
}

function playRound() {
    let playerSelection  = playerChoice();
    let computerSelection = computerPlay();
    console.log(playerSelection,computerSelection)
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    } 
    
    if (playerSelection === "paper" && computerSelection === "paper" ) {
        return "draw";
    } else if (playerSelection === "paper" && computerSelection === "rock" ) {
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "scissors" ) {
        return "lose";
    } 
    
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "draw";
    } else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock" ) {
        return "lose";
    }
}
function game(playerScore,computerScore,round) {
    playerScore = 0;
    computerScore = 0;
    for (i = 0; i < 5; i++) {
        round = playRound()
        if (round === "win") {
            playerScore++; console.log("player wins!")
        } else if (round === "lose") {
            computerScore++; console.log("computer wins!")
        } else if (round === "draw") {
            console.log("Its a draw!")
        }
        
    }

    return `game has ended ${playerScore} vs ${computerScore}`;
}

console.log(game());
