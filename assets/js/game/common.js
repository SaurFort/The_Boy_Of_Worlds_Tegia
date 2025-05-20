const nextSceneBtn = document.getElementById('nextScene')
const chapter = parseInt(document.getElementById('chapter').innerText)
let karma = parseInt(document.getElementById('karma').innerText) // Ici on garde un let car il est modifié dans d'autre script JavaScript
let scene = 0

// On le garde simplement pour ceux qui veulent voir le niveau de karma (karma positif -> pour la reine, karma négatif -> contre la reine)
console.log(`Chapter ${chapter} with ${karma} karma`)

/**
 * Logique lorsque l'on veut change de scène
 *
 * @returns
 */
function nextScene() {
  document.getElementById(`scene${scene}`).classList = 'hidden' // On cache la scène actuel

  scene++ // On incrémente de 1
  document.getElementById(`scene${scene}`).classList = '' // On affiche la nouvelle scène

  hideNextBtn() // On cache le bouton qui permet de passer à la suite
}

/**
 * Affiche le bouton en différé.
 *
 *  @param {int} duration durée en ms
 */
function btnTimeout(duration) {
  hideNextBtn()
  setTimeout(() => (nextSceneBtn.classList = 'button'), duration)
}

/**
 * Logique pour cacher le bouton suivant
 *
 * @returns
 */
function hideNextBtn() {
  nextSceneBtn.classList += ' hidden'
}

/**
 * Logique de changement de page
 *
 * @returns
 */
function nextPage() {
  document.cookie = `karma=${karma}; path=/` // On actualise le cookie du karma
  document.cookie = `chapter=${chapter + 1}; path=/` // On actualise le cookie lié au chapitre
  window.location.reload() // On recharge la page pour forcer une nouvelle exécution de la page (ce qui fait que PHP va nous charger un autre fichier)
}

btnTimeout(2000)
