
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

const mainBox = document.querySelector('.container');

const livePlayerScore = document.querySelector('#player-score');
const liveComputerScore = document.querySelector('#computer-score');

mainBox.addEventListener('mousedown', mousedown);

function mousedown(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = mainBox.getBoundingClientRect();

        mainBox.style.left = rect.left - newX + "px";
        mainBox.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup () {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);

    }
}

function resetState() {
    if (total < 5 ) {
        return;
    } else {
    mainDiv.removeChild(result);
    gameOver.classList.remove('win');
    gameOver.classList.remove('lose');
    mainDiv.removeChild(gameOver);
    playerScore = 0;
    computerScore = 0;
    total = 0;
    }
}

function fiveRounds(e) {
        if (total < 5) {
            let myChoice = e.target.id;
            let round = playOneRound(myChoice);
            if (round == "win") {
                playerScore++; total++; console.log("You win!");
                livePlayerScore.textContent = `Player: ${playerScore}`;
                liveComputerScore.textContent = `Computer: ${computerScore}`;
                } else if (round == "lose") {
                    computerScore++; total++; console.log("You lose!");
                    livePlayerScore.textContent = `Player: ${playerScore}`;
                    liveComputerScore.textContent = `Computer: ${computerScore}`;

                } else if (round == "draw") {
                    total++; console.log("It was a draw!");
                    livePlayerScore.textContent = `Player: ${playerScore}`;
                    liveComputerScore.textContent = `Computer: ${computerScore}`;

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

function playOneRound(answer) {
    let playerAnswer = answer;
    let computerAnswer = computerChoice();

    result.textContent = `You picked ${playerAnswer} and the computer picked ${computerAnswer}!`;
    mainDiv.appendChild(result);

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


