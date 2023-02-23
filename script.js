let playerSelection = 2
playerScore = 0
computerScore = 0

//let promptAndConverter = prompt('')
//playerSelection = prompt()


function playRound(playerSelection) {
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    if (playerSelection == computerSelection) {
            console.log('it\'s a tie');
} else if ((playerSelection == 1 && computerSelection == 3) || 
          (playerSelection == 2 && computerSelection == 1) || 
          (playerSelection == 3 && computerSelection == 2)) {
            console.log('You won this round');
            playerScore++
} else if ((playerSelection == 1 && computerSelection == 2) ||
          (playerSelection == 2 && computerSelection == 3) ||
          (playerSelection == 3 && computerSelection == 1)) {
            console.log('You lost this round');
            computerScore++
}}


//function playGame will play through a max. of 5 rounds. Whenever someone
//wins 3 rounds they are declared a winner. If that doesn't happen, if
//someone has won more rounds they are declared winners, and if it's
//an overall tie, a tie will be declared.
function playGame() {
    for (let i = 0; i <= 4 ; i++) {
    playRound(playerSelection);
    if ((playerScore == 3) || (i == 4 && playerScore > computerScore)) {
        return ('You won the game');
    }
    else if ((computerScore == 3) || (i == 4 && computerScore > playerScore)) {
        return ('The computer won the game');
    }
    else if (i == 4 && computerScore == playerScore) {
        return ('This game is a tie. Play another round to find out who will win!');
    }}} 


console.log(playGame())