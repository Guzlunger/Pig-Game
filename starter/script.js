'use strict';

let random
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const scorePlayer1 = document.querySelector('#score--0')
const scorePlayer2 = document.querySelector('#score--1')
const currentPlayer1 = document.querySelector('#current--0')
const currentPlayer2 = document.querySelector('#current--1')
const playerSection1 = document.querySelector('.player--0')
const playerSection2 = document.querySelector('.player--1')
const img = document.querySelector('.dice')

function toogleActive() {
  
  if (playerSection1.classList.contains('player--active')) {
    playerSection1.classList.remove('player--active')
    playerSection2.classList.add('player--active') 
    currentPlayer1.innerText = '0'
  } else {
    playerSection2.classList.remove('player--active')
    playerSection1.classList.add('player--active')
    currentPlayer2.innerText = '0'
  }
}

function showImg() {
  img.style.display = 'block'
  img.src = `dice-${random}.png`
}

function getRandom() {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1)
}

function dataReset() {
  scorePlayer1.innerText = '0'
  scorePlayer2.innerText = '0'
  currentPlayer1.innerText = '0'
  currentPlayer2.innerText = '0'
  img.style.display = 'none'

}

btnRoll.addEventListener('click', (e) => {
  random = getRandom()
  if (random !== 1) {
    if (playerSection1.classList.contains('player--active')) {
      currentPlayer1.innerText = `${+currentPlayer1.innerText + random}`
      showImg()
    } else {
      currentPlayer2.innerText = `${+currentPlayer2.innerText + random}`
      showImg()
    }
  } else {
    toogleActive()
    showImg()
  }
})

btnHold.addEventListener('click', () => {
    if (playerSection1.classList.contains('player--active')) {
      scorePlayer1.innerText = `${+scorePlayer1.innerText + +currentPlayer1.innerText}`
    } else {
      scorePlayer2.innerText = `${+scorePlayer2.innerText + +currentPlayer2.innerText}`
    }
    toogleActive()
    currentPlayer1.innerText = '0'
    currentPlayer2.innerText = '0'

    if (scorePlayer1.innerText >= 100){
    playerSection1.classList.add('player--winner')
    btnRoll.setAttribute('disabled', true)
    btnHold.setAttribute('disabled', true)

  } else if (scorePlayer2.innerText >= 100) {
    playerSection2.classList.add('player--winner')
    btnRoll.setAttribute('disabled', true)
    btnHold.setAttribute('disabled', true)
  }
})
dataReset()

btnNew.addEventListener('click', () => {
  dataReset()
  btnRoll.removeAttribute('disabled')
  btnHold.removeAttribute('disabled')
  playerSection2.classList.remove('player--active')
  playerSection1.classList.add('player--active')
  if (playerSection1.classList.contains('player--winner')) {
    playerSection1.classList.remove('player--winner')
  } else {
    playerSection2.classList.remove('player--winner')
  }
})
