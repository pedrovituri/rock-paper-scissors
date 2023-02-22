function getComputerChoice() {
    let computerSelection 
    computerSelection = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return computerSelection
}

let computerSelection = getComputerChoice()

let playerSelection = 2
playerScore = 0
computerScore = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
    console.log('it\'s a tie');
    roundWinner = 'tie';
} else if ((playerSelection == 1 && computerSelection == 3) || 
          (playerSelection == 2 && computerSelection == 1) || 
          (playerSelection == 3 && computerSelection == 2)) {
    console.log('You won this round');
    playerScore++
    roundWinner = 'player';
} else if ((playerSelection == 1 && computerSelection == 2) ||
          (playerSelection == 2 && computerSelection == 3) ||
          (playerSelection == 3 && computerSelection == 1)) {
    console.log('You lost this round');
    computerScore++
    roundWinner = 'computer';
}}

function playGame(playerSelection, computerSelection) {
    for (let i = 0; computerSelection <= 3 || playerSelection <= 3; i++) {
    playRound(playerSelection, computerSelection)
    if (playerScore = 3) {
        console.log('You won the game');
    } else if (computerScore = 3) {
        console.log('The computer won the game');
    }}}

console.log(computerSelection)
console.log(playerSelection)
console.log(playGame(playerSelection, computerSelection))