// author: @SaurFort
/**
 * Je suis obligé dans ce fichier d'utiliser des noms de variables à rallonge puisque pour la clarté nous avons plusieurs fichiers très proches en terme de fonctionnement comportant simplement des noms de variables différentes car lié à d'autre partie du jeu.
 */

// Variables lié au chapitre 1
//const chapterOne = document.getElementById('chapter1')
const chapterOneNextSceneBtn = document.getElementById('chapterOneNext')
let chapterOneScene = 0

// Constante lié à la game complète

function nextScene() {
  document.getElementById(`chapter1Scene${chapterOneScene}`).classList =
    'hidden'

  chapterOneScene++
  document.getElementById(`chapter1Scene${chapterOneScene}`).classList = ''

  chapterOneNextSceneBtn.classList += ' hidden'
}

// Code plus générale que je veux executer dès le chargement du script

// Ce timeout sert au chargement de la page pour que le titre apparaisse en premier et laisse 2s avant d'afficher le bouton
setTimeout(() => (chapterOneNextSceneBtn.classList = 'button'), 2000)
