let yourWin = 0
let opponentWin = 0

function pickMove () {
  let number = Math.floor(Math.random() * 5)
  if (number === 0) {
    return 'Rock'
  } else if (number === 1) {
    return 'Paper'
  } else if (number === 2) {
    return 'Scissors'
  } else if (number === 3) {
    return 'Lizard'
  } else if (number === 4) {
    return 'Spock'
  }
}

function compareHands (yourHand = '') {
  const opponentHand = pickMove()
  let result = ''

  if (yourHand === opponentHand) {
    result = 'Tie.'
  } else if (
    // Classic rules
    (yourHand === 'Rock' && opponentHand === 'Scissors') ||
    (yourHand === 'Paper' && opponentHand === 'Rock') ||
    (yourHand === 'Scissors' && opponentHand === 'Paper') ||
    // Lizard
    (yourHand === 'Lizard' && opponentHand === 'Paper') ||
    (yourHand === 'Rock' && opponentHand === 'Lizard') ||
    (yourHand === 'Scissors' && opponentHand === 'Lizard') ||
    // Spock
    (yourHand === 'Spock' && opponentHand === 'Rock') ||
    (yourHand === 'Spock' && opponentHand === 'Scissors') ||
    (yourHand === 'Paper' && opponentHand === 'Spock') ||
    // Lizard poisons Spock
    (yourHand === 'Lizard' && opponentHand === 'Spock')
  ) {
    result = 'You win'
    yourWin++
  } else {
    result = 'Computer wins.'
    opponentWin++
  }

  window.alert(
    'You: ' +
      yourHand +
      '.  Computer: ' +
      opponentHand +
      '.\n\n' +
      result +
      `\n\nYour score: ${yourWin}, Computer score: ${opponentWin}`
  )
}

/// Select buttons by ID

const Rock = document.querySelector('#Rock')
const Paper = document.querySelector('#Paper')
const Scissors = document.querySelector('#Scissors')
const Lizard = document.querySelector('#Lizard')
const Spock = document.querySelector('#Spock')

const buttons = [Rock, Paper, Scissors, Lizard, Spock]

// Define function to add an onclick property

// const playOnClick = selectedButton => {
//   selectedButton.onclick = () => {
//     compareHands(selectedButton.id)
//   }
// }

const play = (selectedButton, event) => {
  selectedButton.addEventListener(event, () => compareHands(selectedButton.id))
}
// Call the function on each button

for (let button of buttons) {
  // play(button, 'mouseover')
  play(button, 'click')
}
