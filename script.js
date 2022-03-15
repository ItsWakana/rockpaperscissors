

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
