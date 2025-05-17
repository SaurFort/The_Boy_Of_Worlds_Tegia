// author: @SaurFort

function sceneOne() {
  const choiceSelect = document.getElementById('scene1Choice')
  const choice = choiceSelect.value
  const dialogOne = document.getElementById('dialog1')
  const dialogTwo = document.getElementById('dialog2')

  console.log(choice)

  if (!choice || choice > 3 || choice < 0) {
    hideNextBtn()
    return
  }

  // Dans le cas des choix 2 et 3, le karma ne change pas
  // Le karma est une mesure que nous utilisons pour savoir sur quel chemin va le joueur
  if (choice == 0) {
    karma += 2
    dialogTwo.innerHTML +=
      "Je n'en attendais pas moins de toi ! Cependant, certains te considèreront comme un traître. Mais bon, je compte sur toi pour mener cette réunion a bien et essaie de stabiliser les relations avec les émissaires."
  } else if (choice == 1) {
    karma -= 2
    dialogTwo.innerHTML +=
      "Peut-être que tu n'es pas à ta place ici. Mais bon, je compte tout de même sur toi. Mène cette réunion a bien et essaie de stabiliser les relations avec les émissaires."
  } else if (choice == 2) {
    dialogTwo.innerHTML +=
      "Je vois que tu es toujours d'une loyauté sans faille... Alors, va. Mène cette réunion a bien et essaie de stabiliser les relations avec les émissaires."
  } else {
    dialogTwo.innerHTML +=
      'Ton silence me surprend. Mais, soit. Arrange nos relations politique avec les émissaires.'
  }

  dialogOne.classList += ' hidden'
  dialogTwo.classList = 'text-justify'
  choiceSelect.classList += ' hidden'

  btnTimeout(5000)
}
