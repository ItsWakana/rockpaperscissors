//create a function that generates a random result for the computer 
function computerPlay() {
    let value = Math.floor(Math.random() * 3);
    if (value === 0) {
        //if the value equals 0 then we want to return "rock" string when the computerPlay function is called
        return "rock";
    } if (value === 1) {
        //if the value equals 1 then we want to return "paper" string when the computerPlay function is called
        return "paper";
    } else if (value === 2) {
        //if the value equals 2 then we want to return "scissors" string when the computerPlay function is called
        return "scissors";
    }
}
//create a function for the players choice of either rock, paper or scissors
function playerChoice() {
    let playerAnswer = prompt("Rock,Paper or Scissors?");
    //when the player enters a value, store it in playerAnswer and then return that variable to the function playerChoice() when it is called.
    return playerAnswer;
}


//create a function called playRound that plays a single round of rock paper scissors and returns the result 
function playRound() {
    //define a variable for playerSelection which takes the value from the playerChoice() function we created above
    let playerSelection  = playerChoice();
    //define a variable for computerSelection which takes the value from the computerPlay() function we created above
    let computerSelection = computerPlay();
    //use console.log to show us the values of playerSelection and computerSelection to check the values are being called correctly. (Note: now that we have created variables for the players selection and computers selection we can use those instead of the functions)
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
//create a function called game with 3 parameters for the players score, computers score and each round
function game(playerScore,computerScore,round) {
//we can set these parameters for player score and computer score to 0 here, as that is our starting value before any rounds are played.(we put our scoreboards outside the loop or else scores would reset to 0 each time it looped)
    playerScore = 0;
    computerScore = 0;
    //we want to use a for loop to loop our game 5 times.
    for (i = 0; i < 5; i++) {
        //create a variable called round which stores the return value of our playRound ( we create it inside the loop so that a new value can be assigned each time the game loops over)
        round = playRound()
        //if the round is equal to 'win' then we add one point to the player score and announce that the player has won
        if (round === "win") {
            playerScore++; console.log("player wins!")
        //if the round is equal to 'lose' then we add one point to the computer score and announce that the computer has won
        } else if (round === "lose") {
            computerScore++; console.log("computer wins!")
        //if the round is equal to 'draw' then we don't add any points to the scores and announce that it was a draw
        } else if (round === "draw") {
            console.log("Its a draw!")
        }
        
    }
    //outside of the loop we return the scores using a template literal including the playerscore and computerscore
    return `game has ended ${playerScore} vs ${computerScore}`;
}
//we can console.log to try the game at the end
console.log(game());
//const computerSelection = computerPlay();