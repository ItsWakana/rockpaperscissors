

function computerChoice() {
    let arrayChoices = ['rock','paper','scissors']
    return arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
}

function playerChoice() {
    let playerInput = prompt("Rock,Paper or Scissors?");
    if (playerInput == null || undefined) {
        alert ("You canceled the game");
    } 
    let playerInputValid = playerInput.toLowerCase();
    if (playerInputValid == "rock" || "paper" || "scissors") {
        return playerInputValid;
    } else {
        alert ("That is not a valid answer");
        let alternateAnswer = playerChoice();
        return alternateAnswer;
    }
}

function playOneRound() {
    let playerAnswer = playerChoice();
    let computerAnswer = computerChoice();
    console.log(`You picked ${playerAnswer} and the computer picked ${computerAnswer}`)
    if (playerAnswer == computerAnswer) {
        return "draw";
    } else if (playerAnswer == "paper" && computerAnswer == "rock") {
        return "win";
    } else if (playerAnswer == "scissors" && computerAnswer == "paper") {
        return "win";
    } else if (playerAnswer == "rock" && computerAnswer == "scissors") {
        return "win";
    }

    if (playerAnswer == "paper" && computerAnswer == "scissors") {
        return "lose";
    } else if (playerAnswer == "scissors" && computerAnswer == "rock") {
        return "lose";
    } else if (playerAnswer == "rock" && computerAnswer == "paper") {
        return "lose";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let round = playOneRound()
        if (round == "win") {
            playerScore++; console.log("You win!");
        } else if (round == "lose") {
            computerScore++; console.log("You lose!");
        } else if (round == "draw") {
            console.log("It was a draw!");
        }
    }
    return `The game is over. You scored ${playerScore} and the computer scored ${computerScore}`;
}

console.log(game());
