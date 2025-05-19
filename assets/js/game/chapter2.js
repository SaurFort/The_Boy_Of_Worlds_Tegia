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
  document.getElementById('investigation').classList = ''
}

function investigation() {
  const choiceSelect = document.getElementById('investigationChoice')
}
