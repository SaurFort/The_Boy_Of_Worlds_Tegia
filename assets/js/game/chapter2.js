// author: @SaurFort
const investigationDiv = document.getElementById('investigation')
const investigationOne = document.getElementById('investigation1')
const investigationTwo = document.getElementById('investigation2')
const investigationThree = document.getElementById('investigation3')

let isCatch = false

function sceneOne() {
  document.getElementById('nextDialog').classList += ' hidden'
  document.getElementById('dialog1').classList = 'hidden'
  document.getElementById('dialog2').classList = ''

  btnTimeout(2000)
}

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

function investigation() {
  const choiceSelect = document.getElementById('investigationChoice')
  const choice = parseInt(choiceSelect.value)

  if (choice === 1) investigationOne.classList = ''
  else if (choice === 2) investigationTwo.classList = ''
  else if (choice === 3) investigationThree.classList = ''
  else if (choice === 4) nextScene()
  else return

  investigationDiv.classList = 'hidden'
}

function investigationChoiceOne() {
  document.getElementById('investigationChoice2').classList = ''
  investigationDiv.classList = ''
  investigationOne.classList = 'hidden'
}

function investigationChoiceTwo() {
  const choiceSelect = document.getElementById('investigationSelectTwo')
  const choice = parseInt(choiceSelect.value)

  if (choice === 1) {
    document.getElementById('investigationPart2Choice1').classList = ''
    isCatch = true
  } else document.getElementById('investigationPart2Choice2').classList = ''

  choiceSelect.classList = 'hidden'
  document.getElementById('dialog4').classList = 'hidden'
}

function investigationPartTwoTwo() {
  investigationTwo.classList = 'hidden'
  document.getElementById('dialog4').classList = ''
  investigationDiv.classList = ''
  document.getElementById('investigationPart2Choice2').classList = 'hidden'
  document.getElementById('investigationSelectTwo').classList = ''
}

function investigationChoiceThree() {
  investigationThree.classList = 'hidden'
  investigationDiv.classList = ''
}
