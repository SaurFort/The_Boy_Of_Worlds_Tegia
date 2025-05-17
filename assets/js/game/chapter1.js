// author: @SaurFort
/**
 * Je suis obligé dans ce fichier d'utiliser des noms de variables à rallonge puisque pour la clarté nous avons plusieurs fichiers très proches en terme de fonctionnement comportant simplement des noms de variables différentes car lié à d'autre partie du jeu.
 */

// Variables lié au chapitre 1
const chapterOneNextSceneBtn = document.getElementById('chapterOneNext')
let chapterOneScene = 0

// Constante lié à la game complète

function chapterOneNextScene() {
  document.getElementById(`chapter1Scene${chapterOneScene}`).classList =
    'hidden'

  chapterOneScene++
  document.getElementById(`chapter1Scene${chapterOneScene}`).classList = ''

  chapterOneNextSceneBtn.classList += ' hidden'

  if (chapterOneScene === 1) cOneSceneOne()
}

/**
 * Affiche le bouton en différé.
 *
 *  @param {int} duration durée en ms
 */
function btnTimeout(duration) {
  chapterOneNextSceneBtn.classList += ' hidden'
  setTimeout(() => (chapterOneNextSceneBtn.classList = 'button'), duration)
}

function cOneSceneOne() {
  while (!haveChoose) {
    setTimeout(() => console.info("Player haven't choose yet"), 1000)
  }

  document.getElementById('chapter1Scene1Choices').classList += ' hidden'

  btnTimeout(1000)
}

// Code plus générale que je veux executer dès le chargement du script
btnTimeout(2000)
