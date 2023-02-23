let playerSelection = 2
playerScore = 0
computerScore = 0

/* let computerSelection = function getComputerChoice() {
    let computerMath = Math.floor(Math.random() * 3) + 1;
    console.log(computerMath)
    return computerMath
} 

console.log(computerSelection()) */


function playRound(playerSelection) {
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    if (playerSelection == computerSelection) {
    console.log('it\'s a tie');
    roundWinner = 'tie';
    //console.log(computerSelection);
    //console.log(playerSelection);
    //console.log(playerScore)
    //console.log(computerScore)
} else if ((playerSelection == 1 && computerSelection == 3) || 
          (playerSelection == 2 && computerSelection == 1) || 
          (playerSelection == 3 && computerSelection == 2)) {
    console.log('You won this round');
    playerScore++
    roundWinner = 'player';
    //console.log(computerSelection)
    //console.log(playerSelection)
    //console.log(playerScore)
    //console.log(computerScore)
} else if ((playerSelection == 1 && computerSelection == 2) ||
          (playerSelection == 2 && computerSelection == 3) ||
          (playerSelection == 3 && computerSelection == 1)) {
    console.log('You lost this round');
    computerScore++
    roundWinner = 'computer';
    //console.log(computerSelection)
    //console.log(playerSelection)
    //console.log(playerScore)
    //console.log(computerScore)
}}

function playGame() {
    for (let i = 0; i <= 5 ; i++) {
    playRound(playerSelection);
    if ((playerScore == 3) || (i == 5 && playerScore > computerScore)) {
        return ('You won the game');
    }
    else if ((computerScore == 3) || (i == 5 && computerScore > playerScore)) {
        return ('The computer won the game');
    }
    else if (i == 5 && computerScore == playerScore) {
        return ('This game is a tie. Play another round to find out who will win!');
    }}} 

//console.log(playRound(playerSelection))
console.log(playGame())