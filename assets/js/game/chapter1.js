// author: @SaurFort
// Au chargement de la page, on cache le QTE
const qteGame = document.getElementById('qte')
qteGame.classList = 'hidden'
const qteDifficulty = document.getElementById('difficulty')

function sceneOne() {
  const choiceSelect = document.getElementById('scene1Choice')
  const choice = choiceSelect.value
  const dialogOne = document.getElementById('dialog1')
  const dialogTwo = document.getElementById('dialog2')

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

function sceneTwo() {
  document.getElementById('dialog3').classList += ' hidden'
  qteGame.classList = ''
  qteDifficulty.innerText = 7
}

function sceneTwoDialog(success = false) {
  const dialog4 = document.getElementById('dialog4')
  const dialog5 = document.getElementById('dialog5')
  document.getElementById('dialogBox4').classList = ''

  if (success) {
    return
  }

  dialog5.classList = 'text-center'
  dialog4.classList = 'text-justify'
  document.getElementById('scene2Choice').classList = 'hidden'

  if (karma >= 0) {
    dialog5.innerHTML +=
      'est satisfaite de ce que vous avez fait durant la réunion avec les émissaires.'
    dialog4.innerHTML +=
      "Votre compromis me semble correcte. En espérant que cela pourra permettre une collaboration durable, et que personne n'essaiera de tout gâcher."
    karma += 2
  } else {
    dialog5.innerHTML +=
      "n'est pas contente de ce que vous avez fait durant la réunion avec les émissaires."
    dialog4.innerHTML +=
      "Vous n'êtes en rien utile à cette réunion, vous ne faites que jetez de l'huile sur le feu."
    karma -= 2
  }

  setTimeout(
    () => (document.getElementById('nextPage').classList = 'button'),
    2000
  )
}

function sceneTwoChoice() {
  const choiceSelect = document.getElementById('scene2Choice')
  const choice = parseInt(choiceSelect.value)
  const dialog4 = document.getElementById('dialog4')
  const dialog5 = document.getElementById('dialog5')
  dialog5.classList = 'text-center'
  dialog4.classList = 'text-justify'

  if (!choice && choice < 1 && choice > 2) return

  if (choice === 0) {
    dialog5.innerHTML +=
      'est satisfaite de ce que vous avez fait durant la réunion avec les émissaires.'
    dialog4.innerHTML +=
      "Votre compromis me semble correcte. En espérant que cela pourra permettre une collaboration durable, et que personne n'essaiera de tout gâcher."
    karma += 2
  } else {
    dialog5.innerHTML +=
      "n'est pas contente de ce que vous avez fait durant la réunion avec les émissaires."
    dialog4.innerHTML +=
      "Vous n'êtes en rien utile à cette réunion, vous ne faites que jetez de l'huile sur le feu."
    karma -= 2
  }

  choiceSelect.classList = 'hidden'

  setTimeout(
    () => (document.getElementById('nextPage').classList = 'button'),
    2000
  )
}

// Ceci est un callback pour être capable de gérer la réussite du QTE
qteState.onSuccess = () => {
  setTimeout(() => {
    qteResult.innerText = ''
    sceneTwoDialog(true)
  }, 2000)
}

// Ceci est un callback pour être capable de gérer l'échec du QTE
qteState.onFail = () => {
  setTimeout(() => {
    qteResult.innerText = ''
    sceneTwoDialog(false)
  }, 2000)
}
