const nextSceneBtn = document.getElementById('nextScene')
const chapter = parseInt(document.getElementById('chapter').innerText)
let karma = parseInt(document.getElementById('karma').innerText)
let scene = 0

console.log(`Actually at chapter ${chapter} with ${karma} of karma`)

function nextScene() {
  document.getElementById(`scene${scene}`).classList = 'hidden'

  scene++
  document.getElementById(`scene${scene}`).classList = ''

  hideNextBtn()
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

function hideNextBtn() {
  nextSceneBtn.classList += ' hidden'
}

function nextPage() {
  document.cookie = `karma=${karma}; path=/`
  document.cookie = `chapter=${chapter + 1}; path=/`
  alert(document.cookie)
  window.location.reload()
}

// Code plus générale que je veux executer dès le chargement du script
btnTimeout(2000)
