// author: @SaurFort
// Récupération des trois parties du QTE
const qteExplainationDiv = document.getElementById('qteExplaination')
const qteTestDiv = document.getElementById('qteTest')
const qteDiv = document.getElementById('qteGame')

// Récupération de la zone de texte où l'on affiche le résultat
const qteResult = document.getElementById('qteInfo')

// Récupération des boutons de QTE
const qteTestBtn = document.getElementById('qteTestBtn')
const qteBtn = document.getElementById('qteBtn')

// Récupération de la difficulté du QTE (échelle de 1 à 10)
let difficulty // Ici je ne définit pas la difficulté directement pour permettre de la modifier avant de lancer le QTE

const qteState = {
  _isTest: false, // Permet de savoir si l'utilisateur est en train de faire le QTE d'entrainement
  _isActive: false, // Permet de savoir si nous sommes dans la phase active du QTE
  _success: false, // Permet de savoir si l'utilisateur à réussi le QTE
  onSuccess: null, // Permet de gérer la logique en cas de réussite
  onFail: null, // Permet de gérer la logique en cas d'échec

  get isTest() {
    return this._isTest
  },
  set isTest(value) {
    this._isTest = value
  },

  get isActive() {
    return this._isActive
  },
  set isActive(value) {
    this._isActive = value
    if (
      !this._isTest &&
      !this._isActive &&
      !this._success &&
      typeof this.onFail === 'function'
    )
      this.onFail()
  },

  get success() {
    return this._success
  },
  set success(value) {
    this._success = value
    if (!this._isTest && typeof this.onSuccess === 'function') this.onSuccess()
  },
}

function testQte() {
  qteExplainationDiv.classList = 'hidden'
  qteTestDiv.classList = ''

  qteState.isTest = true
  difficulty = 2
  qteState.success = false

  const test = generateQTE()

  document.getElementById('testQteTime').innerText = `${
    test.qteDuration / 1000
  } seconde${test.qteDuration > 1 ? 's' : ''}`

  setTimeout(() => {
    qteState.isActive = true
    qteTestBtn.classList += ' qte-active'
    setTimeout(() => {
      qteTestBtn.classList = 'button'
      qteState.isActive = false
      validQte()
      setTimeout(() => resetQTE(), 3000)
    }, test.qteDuration)
  }, test.delay)
}

function qte() {
  qteExplainationDiv.classList = 'hidden'
  qteDiv.classList = ''

  qteState.isTest = false
  difficulty = updateDifficulty()
  qteState._success = false

  const test = generateQTE()

  setTimeout(() => {
    qteState.isActive = true
    qteBtn.classList += ' qte-active'
    setTimeout(() => {
      qteBtn.classList = 'button'
      qteState.isActive = false
      validQte()
    }, test.qteDuration)
  }, test.delay)
}

function validQte() {
  if (qteState.isActive) qteState.success = true

  qteResult.innerText = qteState.success
    ? 'Bravo ! Vous avez réussi'
    : 'Dommage ! Vous avez raté'
  qteTestDiv.classList = 'hidden'
  qteDiv.classList = 'hidden'
}

function updateDifficulty() {
  return parseInt(document.getElementById('difficulty').innerText)
}

function generateQTE() {
  // Délai aléatoire entre 1,5 et 10 secondes (en ms)
  const delay = Math.floor(Math.random() * (10_000 - 1_500 + 1)) + 1_500

  // Durée du QTE en fonction de la difficulté (entre 3000ms et 500ms)
  const qteDuration = 3_000 - ((difficulty - 1) / 9) * (3_000 - 500)

  return {
    delay, // Délai avant le début du QTE (en ms)
    qteDuration, // Temps pour réagir une fois le QTE lancé (en ms)
  }
}

function resetQTE() {
  qteExplainationDiv.classList = ''
  qteResult.innerText = ''
}
