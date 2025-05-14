// author: @SaurFort
const nextBtn = document.getElementById('nextBtn')
let chapter = 1

function nextPage() {
  document.getElementById(`chapter${chapter}`).classList += 'hidden'
  nextBtn.classList += ' hidden'
  nextBtn.disabled = true

  chapter++
  if (chapter > 7) chapter = 1

  document.getElementById(`chapter${chapter}`).classList = ''

  setInterval(() => {
    nextBtn.classList = 'button'
    nextBtn.disabled = false
  }, 5000)
}
