function sceneOne() {
  document.getElementById('nextDialog').classList += ' hidden'
  document.getElementById('dialog1').classList = 'hidden'
  document.getElementById('dialog2').classList = ''

  btnTimeout(2000)
}

function sceneTwo() {
  const choiceSelect = document.getElementById('choice1')
  const choice = parseInt(choiceSelect.value)

  console.log(choice)

  if (!choice || choice < 0 || choice > 3) return

  if (choice === 0) karma += 2
  else if (choice === 1) karma--
  else if (choice === 2) karmar -= 3

  document.getElementById('dialog3').classList = 'hidden'
  document.getElementById('investigaton').classList = ''
}
