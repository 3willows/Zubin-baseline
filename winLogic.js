let yourWin = 0;
let opponentWin = 0;

function pickMove() {
  let number = Math.floor(Math.random() * 5);
  if (number === 0) {
    return 'Rock';
  }
  else if (number === 1) {
    return 'Paper';
  } else if (number === 2) {
    return 'Scissors';
  }
  else if (number === 3) {
    return 'Lizard';
  } else if (number === 4) {
    return 'Spock';      }
}

function compareHands(yourHand = '') {
  const opponentHand = pickMove();
  let result = '';

  if (yourHand === opponentHand) {
    result = 'Tie.';
  }
  else if (

    // Classic rules
    (yourHand === 'Rock' && opponentHand === 'Scissors')||
    (yourHand === 'Paper' &&  opponentHand === 'Rock' )||
    (yourHand === 'Scissors' && opponentHand === 'Paper')||

    // Lizard
    (yourHand === 'Lizard' &&  opponentHand === 'Paper')|| 
    (yourHand === 'Rock' && opponentHand === 'Lizard')||
    (yourHand === 'Scissors' && opponentHand === 'Lizard')||

    // Spock        
    (yourHand === 'Spock' && opponentHand === 'Rock')||
    (yourHand === 'Spock' && opponentHand === 'Scissors')||
    (yourHand === 'Paper' &&  opponentHand === 'Spock' ) ||

    // Lizard poisons Spock
    (yourHand === 'Lizard' && opponentHand === 'Spock')
    ) 
    {
    result = 'Winner: HUMAN.';
    yourWin++;
  }
  else {
    result = 'Winner: COMPUTER.';
    opponentWin++;
  }
  window.alert('You: ' + yourHand + '.  Computer: ' + opponentHand + '.\n\n' + result + `\n\nYour score: ${yourWin}, Computer score: ${opponentWin}`)
}
