
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

function playRound(playerSelection,computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Its a draw!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! paper beats rock");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player has won! Rock beats scissors");
    } 
    
    if (playerSelection === "paper" && computerSelection === "paper" ) {
        console.log("Its a draw!");
    } else if (playerSelection === "paper" && computerSelection === "rock" ) {
        console.log("You have won! paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors" ) {
        console.log("You lose! Scissors beats paper");
    } 
    
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("Its a draw!");
    } else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        console.log("You win! scissors beats paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock" ) {
        console.log("You lose! Rock beats scissors");
    }
}

const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
