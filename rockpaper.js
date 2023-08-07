function afficherResultat(resultat) {
  document.getElementById('resultat').textContent = resultat; 
}

function playGame(playerMove){
const computerMove = pickComputerMove();
let result = '';

if (playerMove === 'rock'){
    if(computerMove === 'Rock'){
    result = 'Tie.';

    }else if(computerMove === 'Paper'){
    result = 'You Lose &#128514';

    }else if(computerMove === 'Scissors'){
    result = 'You win';
  }
}

if (playerMove === 'paper'){
    if(computerMove === 'Rock'){
    result = 'You Win!';

    }else if(computerMove === 'Paper'){
    result = 'Tie.';

    }else if(computerMove === 'Scissors'){
    result = 'You lose &#128514';
  }
}
if (playerMove === 'scissors'){
    if(computerMove === 'Rock'){
    result = 'You lose &#128514';

    }else if(computerMove === 'Paper'){
    result = 'You Win';

    }else if(computerMove === 'Scissors'){
    result ='Tie game';
}
}
afficherResultat(result);
alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}`);
}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'Rock';

} else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'Paper';

} else if(randomNumber >= 2/3 && randomNumber < 1){
computerMove = 'Scissors';
} 
  return computerMove;
}