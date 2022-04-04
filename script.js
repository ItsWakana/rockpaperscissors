
//randomly generates a choice for the computer from the array
function computerChoice() {
    let arrayChoices = ['rock','paper','scissors']
    return arrayChoices[Math.floor(Math.random()*arrayChoices.length)];
}
//lets the user pick a valid option

const playGame = document.getElementById('play-game');


playGame.addEventListener('click', game); 

let playerScore = 0;
let computerScore = 0;
let total = 0;

const mainDiv = document.querySelector('.result');
let result = document.querySelector('#answer');
const gameOver = document.querySelector('#game-over');


function resetState() {
    mainDiv.removeChild(result);
    gameOver.classList.remove('win');
    gameOver.classList.remove('lose');
    mainDiv.removeChild(gameOver);
    playerScore = 0;
    computerScore = 0;
    total = 0;
}

function fiveRounds(e) {
        if (total < 5) {
            let myChoice = e.target.id;
            let round = playOneRound(myChoice);
            if (round == "win") {
                playerScore++; total++; console.log("You win!");
                } else if (round == "lose") {
                    computerScore++; total++; console.log("You lose!");
                } else if (round == "draw") {
                    total++; console.log("It was a draw!");
                }
        } else {
            playGame.classList.remove('play-game');
            if (playerScore > computerScore) {
                gameOver.classList.add('win');
            } else {
                gameOver.classList.add('lose');
            }
            mainDiv.appendChild(gameOver);
            gameOver.textContent = `The game is over. You scored ${playerScore} and the computer scored ${computerScore}`;
            // console.log(`The game is over. You scored ${playerScore} and the computer scored ${computerScore}`);
        }
}

    function game() {
    resetState();
    playGame.classList.add('play-game');
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    let myArray =[rock,paper,scissors];
    myArray.forEach( (element) => {
            element.addEventListener('click', fiveRounds);
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
    result.textContent = `You picked ${playerAnswer} and the computer picked ${computerAnswer}!`;
    mainDiv.appendChild(result);
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


