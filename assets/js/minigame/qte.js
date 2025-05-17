// author: @SaurFort
// Récupération des trois parties du QTE
const qteExplainationDiv = document.getElementById('qteExplaination')
const qteTestDiv = document.getElementById('qteTest')
const qteDiv = document.getElementById('qte')

// Récupération de la zone de texte où l'on affiche le résultat
const qteResult = document.getElementById('qteInfo')

// Récupération des boutons de QTE
const qteTestBtn = document.getElementById('qteTestBtn')
const qteBtn = document.getElementById('qteBtn')

// Récupération de la difficulté du QTE (échelle de 1 à 10)
let difficulty = updateDifficulty()

let isActive = false
let success = false

function testQte() {
  qteExplainationDiv.classList = 'hidden'
  qteTestDiv.classList = ''

  success = false

  const test = generateQTE()

  document.getElementById('testQteTime').innerText = `${
    test.qteDuration / 1000
  } seconde${test.qteDuration > 1 ? 's' : ''}`

  setTimeout(() => {
    isActive = true
    qteTestBtn.classList += ' qte-active'
    setTimeout(() => (isActive = false), test.qteDuration)
  }, test.delay)
}

function validTestQte() {
  if (isActive) success = true

  qteResult.innerText = success
    ? 'Bravo ! Vous avez réussi'
    : 'Dommage ! Vous avez raté'
  qteTestDiv.classList = 'hidden'
}

function qte() {}

function validQte() {}

function updateDifficulty() {
  return parseInt(document.getElementById('difficulty').innerText)
}

function generateQTE() {
  // Délai aléatoire entre 2 et 10 secondes (en ms)
  const delay = Math.floor(Math.random() * (10_000 - 2_000 + 1)) + 2_000

  // Durée du QTE en fonction de la difficulté (entre 5000ms à 500ms)
  const qteDuration = 5_000 - ((difficulty - 1) / 9) * (5_000 - 500)

  return {
    delay, // Délai avant le début du QTE (en ms)
    qteDuration, // Temps pour réagir une fois le QTE lancé (en ms)
  }
}
