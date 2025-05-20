// author: @SaurFort
const investigationDiv = document.getElementById('investigation') // Div du mini-jeu d'enquête
const investigationOne = document.getElementById('investigation1') // Première partie de l'enquête
const investigationTwo = document.getElementById('investigation2') // Deuxième partie de l'enquête
const investigationThree = document.getElementById('investigation3') // Troisième partie de l'enquête

let isCatch = false // Nous permet de savoir dans le cadre de l'enquête si le joueur à capture le prisonnier.

/**
 * Logique de la scène 1
 *
 * @returns
 */
function sceneOne() {
  document.getElementById('nextDialog').classList += ' hidden'
  document.getElementById('dialog1').classList = 'hidden'
  document.getElementById('dialog2').classList = ''

  btnTimeout(2000)
}

/**
 * Logique dee la scène 2
 *
 * @returns
 */
function sceneTwo() {
  const choiceSelect = document.getElementById('choice1')
  const choice = parseInt(choiceSelect.value)

  if (choice === '') return

  if (choice === 0) karma += 2
  else if (choice === 1) karma--
  else if (choice === 2) karmar -= 3

  document.getElementById('dialog3').classList = 'hidden'
  document.getElementById('choice1').classList = 'hidden'
  investigationDiv.classList = ''
}

/**
 * Logique du sélecteur de l'enquête afin d'afficher les parties correspondantes au choix dans l'enquête
 *
 * @returns
 */
function investigation() {
  const choiceSelect = document.getElementById('investigationChoice')
  const choice = parseInt(choiceSelect.value)

  if (choice === 1) investigationOne.classList = ''
  else if (choice === 2) investigationTwo.classList = ''
  else if (choice === 3) investigationThree.classList = ''
  else if (choice === 4) nextScene() // On passe à la scène suivante directement
  else return

  investigationDiv.classList = 'hidden'
}

/**
 * Logique de l'enquête lors du premier choix
 *
 * @returns
 */
function investigationChoiceOne() {
  document.getElementById('investigationChoice2').classList = ''
  investigationDiv.classList = ''
  investigationOne.classList = 'hidden'
}

/**
 * Logique de l'enquête lors du deuxième choix
 *
 * @returns
 */
function investigationChoiceTwo() {
  const choiceSelect = document.getElementById('investigationSelectTwo')
  const choice = parseInt(choiceSelect.value)

  if (choice === 1) {
    document.getElementById('investigationPart2Choice1').classList = ''
    isCatch = true
    document.getElementById('select3Choice1').classList = ''
    document.getElementById('select3Choice3').classList = ''
    btnTimeout(2000)
  } else {
    document.getElementById('investigationPart2Choice2').classList = ''
    document.getElementById('nextScene').classList = 'button'
  }

  choiceSelect.classList = 'hidden'
  document.getElementById('dialog4').classList = 'hidden'
}

/**
 * Logique de l'enquête lors de la deuxième partie du deuxième choix
 *
 * @returns
 */
function investigationPartTwoTwo() {
  investigationTwo.classList = 'hidden'
  document.getElementById('dialog4').classList = ''
  investigationDiv.classList = ''
  document.getElementById('investigationPart2Choice2').classList = 'hidden'
  document.getElementById('investigationSelectTwo').classList = ''
}

/**
 * Logique de l'enquête lors du troisième choix
 *
 * @returns
 */
function investigationChoiceThree() {
  investigationThree.classList = 'hidden'
  investigationDiv.classList = ''
}

/**
 * Logique de la scène 3
 *
 * @returns
 */
function sceneThree() {
  const choiceSelect = document.getElementById('select3')
  const choice = parseInt(choiceSelect.value)

  if (choice === 1) {
    karma += 2
  } else if (choice === 2) {
    karma--
  } else if (choice === 3) {
    karma -= 3
  } else if (choice === 4) {
    karma += 1
  }

  nextPage()
}
