
//randomly generates a choice for the computer from the array
function computerChoice() {
    let arrayChoices = ['rock','paper','scissors']
    return arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
}
//lets the user pick a valid option
const playGame = document.getElementById('play-game');
playGame.addEventListener('click', game); 

    function game() {
    playGame.removeEventListener('click', game);
    playGame.classList.add('play-game');
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    let myArray =[rock,paper,scissors];

    myArray.forEach((element) => {
        element.addEventListener('click', (e) => {
            playOneRound(e.target.id);
        });
    });
    }

    function gameStart() {
        const playGame = document.getElementById('play-game');

        playGame.classList.add('play-game');
    }


    
    // let playerInput = prompt("Rock,Paper or Scissors?");
    // if (playerInput == null || playerInput == undefined) {
    //     return "cancel";
    // } 
    // let playerInputValid = playerInput.toLowerCase();
    // if (playerInputValid == "rock" || playerInputValid == "paper" || playerInputValid == "scissors") {
    //     return playerInputValid;
    // } else {
    //     alert ("That is not a valid answer");
    //     let alternateAnswer = playerChoice();
    //     return alternateAnswer;
    // }
//}

//plays one round of the game
function playOneRound(answer) {
    let playerAnswer = answer;
    let computerAnswer = computerChoice();
    const mainDiv = document.querySelector('.result');
    let result = document.createElement('p');
    result.textContent = `You picked ${playerAnswer} and the computer picked ${computerAnswer}!`;
    mainDiv.appendChild(result)
    // console.log(`You picked ${playerAnswer} and the computer picked ${computerAnswer}`)
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
//plays 5 rounds of the game using a loop and keeps score
// function game() {
//     let letsGame = prompt("How many rounds do you want to play?");
//     let roundNumber = parseInt(letsGame);
//     if (Number.isInteger(roundNumber)) {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (i = 0; i < roundNumber; i++) {
//         let round = playOneRound()
//         if (round == "win") {
//             playerScore++; console.log("You win!");
//         } else if (round == "lose") {
//             computerScore++; console.log("You lose!");
//         } else if (round == "draw") {
//             console.log("It was a draw!");
//         } else if (round == "cancel") {
//             return "you canceled the game";
//         }
//     }
//     //returns the result at the end
//     console.log(`The game is over. You scored ${playerScore} and the computer scored ${computerScore}`);
//     let gameAgain = playAgain();
//     return gameAgain;
//     } else if (letsGame == undefined) {
//         return "Canceled. You should play at least a few rounds :(";
//     } else if (isNaN(roundNumber)) {
//         console.log("Pick a number next time!")
//         return game();
//     }
// }

function playAgain() {
    let gameAgain = confirm("Would you like to play again?")
    if (gameAgain == true) {
        return game();
    } else if (gameAgain == false) {
        return "Okay! See you next time!";
    }
}


