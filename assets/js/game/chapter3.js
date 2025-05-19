const qteGame = document.getElementById('qte')
const dialog = document.getElementById('dialog2')

// On cache le QTE au chargement de la page
qteGame.classList += 'hidden'

function selectOne() {
  const choiceSelect = document.getElementById('select1')
  const choice = parseInt(choiceSelect.value)

  if (choice === 1) {
    dialog.innerText =
      'Vous décidez de diriger un groupe de soldat. Vous encerclez les groupes de rebelles et avancer, bouclier levés. Les émeutiers brutalisés fuient, cependant certains reste pour se battre.'
    karma -= 2
  } else if (choice === 2) {
    dialog.innerText =
      'Vous envoyez plusieurs messagers annoncer un couvre feu. Cela fonctionne en partie puisque de nombreux émeutiers rentre chez eux, cependant certains restent et continue de piller. Néanmoins, les affrontements ont été évités avec succès.'
    karma += 2
  } else if (choice === 3) {
    // On lance un QTE
    choiceThree()
  } else if (choice === 4) {
    // On lance un QTE
    choiceFour()
  }

  document.getElementById('dialog1').classList = 'hidden'
  choiceSelect.classList = 'hidden'

  setTimeout(() => nextPage(), 5000)
}

function choiceThree() {
  document.getElementById('scene1').classList = 'hidden'
  qteGame.classList = ''

  document.getElementById('difficulty').innerText =
    karma >= 0 ? (karma > 5 ? 10 : 7) : karma <= -5 ? 3 : 5

  qteState.onSuccess = () => {
    document.getElementById('scene1').classList = ''
    dialog.innerText =
      "Le commandant se fait un plaisir de répondre à votre demande. Les émeutes sont certes maîtrisé, mais l'intervention de l'armée a provoqué de nombreux morts. Le peuple vous en veux."
    karma -= 3
    qteGame.classList = 'hidden'
  }

  qteState.onFail = () => {
    document.getElementById('scene1').classList = ''
    dialog.innerText = 'Le commandant refuse de répondre à votre demande.'
    document.getElementById('select1').classList = ''
    document.getElementById('select1Choice3').classList = 'hidden'
    document.getElementById('select1Choice4').classList = 'hidden'
    qteGame.classList = 'hidden'
  }
}

function choiceFour() {
  document.getElementById('scene1').classList = 'hidden'
  qteGame.classList = ''

  document.getElementById('difficulty').innerText =
    karma >= 0 ? (karma > 5 ? 3 : 5) : karma <= -5 ? 10 : 7

  qteState.onSuccess = () => {
    document.getElementById('scene1').classList = ''
    dialog.innerText =
      'Le conseiller et vous réussissez à trouver une solution pacifique pour faire cécer les émeutes, du moins, pour le moment.'
    karma += 3
    qteGame.classList = 'hidden'
  }

  qteState.onFail = () => {
    document.getElementById('scene1').classList = ''
    dialog.innerText = 'Le conseiller refuse de trouver un plan avec vous.'
    document.getElementById('select1').classList = ''
    document.getElementById('select1Choice3').classList = 'hidden'
    document.getElementById('select1Choice4').classList = 'hidden'
    qteGame.classList = 'hidden'
  }
}
