let playerSelection = 2
playerScore = 0
computerScore = 0
let computerSelection

function playRound(playerSelection, computerSelection) {
    let computerSelector = function getComputerChoice() {
        let computerMath = Math.floor(Math.random() * 3) + 1;
        return computerMath
    }
    computerSelection = computerSelector
    if (playerSelection == computerSelection) {
    console.log('it\'s a tie');
    roundWinner = 'tie';
    console.log(computerSelection);
    console.log(playerSelection);
} else if ((playerSelection == 1 && computerSelection == 3) || 
          (playerSelection == 2 && computerSelection == 1) || 
          (playerSelection == 3 && computerSelection == 2)) {
    console.log('You won this round');
    playerScore++
    roundWinner = 'player';
    console.log(computerSelection)
    console.log(playerSelection)
} else if ((playerSelection == 1 && computerSelection == 2) ||
          (playerSelection == 2 && computerSelection == 3) ||
          (playerSelection == 3 && computerSelection == 1)) {
    console.log('You lost this round');
    computerScore++
    roundWinner = 'computer';
    console.log(computerSelection)
    console.log(playerSelection)
}}

function playGame() {
    for (let i = 0; i <= 5 ; i++) {
    playRound(playerSelection, computerSelection);
    if (playerScore = 3) {
        console.log('You won the game');
    }
    if (computerScore = 3) {
        console.log('The computer won the game');
    }
}
}

console.log(playRound(playerSelection, computerSelection))
console.log(playGame())