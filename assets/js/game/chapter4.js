const qteGame = document.getElementById('qte')

// Nous cachons le QTE au chargement de la page
qteGame.classList = 'hidden'

function sceneOne() {
  nextScene()

  if (karma >= 0) document.getElementById('forQueen').classList = ''
  else document.getElementById('againstQueen').classList = ''
}

function forQueen() {
  const choice = parseInt(document.getElementById('select2').value)

  if (choice === 1) {
    document.getElementById('difficulty').innerText = 6

    qteState.onSuccess = () => {
      qteGame.classList = 'hidden'
      document.getElementById('forQueenChoice').classList = ''
      document.getElementById('fqcText').innerText =
        "Vous avez réussi ... Vous avez réussi à tuer le commandant ! Face à cet exploit, le reste de l'armée est impressionné voir même effrayé. Puisque désormais l'armée vous craint, vous leur ordonner de faire cesser cette guerre civil et en seulement quelques semaines, l'armée réussit à matter les derniers rebelles, mettant fin une bonne fois pour toutes à ce bain de sang. Bravo !"
    }

    qteState.onFail = () => {
      qteGame.classList = 'hidden'
      document.getElementById('forQueenChoice').classList = ''
      document.getElementById('fqcText').innerText =
        "Dans ce duel, vous vous faites couper le bras gauche par le commandant, et voyant que vous êtes affaibli, il décide de vous achever en vous poignardant directement au niveau du coeur. Vous aurez peu souffert de ce duel, cependant la reine et le reste du conseil se feront massacré par l'armée. Dommage pour cette planète ..."
    }
  } else if (choice === 2) {
    document.getElementById('difficulty').innerText = 10

    qteState.onSuccess = () => {
      qteGame.classList = 'hidden'
      document.getElementById('forQueenChoice').classList = ''
      document.getElementById('fqcText').innerText =
        'La résistance à toutes ces attaques fût difficile, mais vos prièrent ont portés leur fruit, une étrange silhouette apparaît sous vos yeux et prononça les mots suivant "Bravo, désormais je vais m\'occuper de tout, bonne chance mes enfants ...". Ma soeur est vraiment une bonne personne. Enfin je divague (vague), vous avez fait les bon choix, grâce à vous, tout les problèmes vont être régler, et vous avez éviter des morts inutile.'
    }

    qteState.onFail = () => {
      qteGame.classList = 'hidden'
      document.getElementById('forQueenChoice').classList = ''
      document.getElementById('fqcText').innerText =
        "Dommage, vous n'avez pas été suffisament fort pour résister aux assauts de l'armée et des rebels, malheuresement la déesse arriva trop tard pour sauver tout le monde."
    }
  } else {
    document.getElementById('difficulty').innerText = 1

    qteState.onSuccess = () => {
      qteGame.classList = 'hidden'
      document.getElementById('forQueenChoice').classList = ''
      document.getElementById('fqcText').innerText =
        'Puisque vous vous sentiez impuissant, vous avez décidé de vous suicidez. Tant de personnes étaient prête à mourrir pour vous, mais vous avez préférer mettre fin à vos jours, tel un lâche.'
    }

    qteState.onFail = () => {
      qteGame.classList = 'hidden'
      document.getElementById('forQueenChoice').classList = ''
      document.getElementById('fqcText').innerText =
        "Vous venez d'essayer de vous suicidez, sauf que vous êtes tellement mauvais que même pour une tâche aussi simple, vous avez échoué. Heureusement pour vous, les rebels viennent de forcer les portes de la salle de réunion et vous poignarde dans le dos."
    }
  }

  qteGame.classList = ''
  document.getElementById('forQueenGame').classList = 'hidden'
}
