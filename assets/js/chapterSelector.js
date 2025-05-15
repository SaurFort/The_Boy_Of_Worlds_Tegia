// author: @SaurFort
let chapter = 1
let karma = 0

function nextPage() {
  const nextBtn = document.getElementById('nextBtn')

  document.getElementById(`chapter${chapter}`).classList += 'hidden'
  nextBtn.classList += ' hidden'
  //nextBtn.disabled = true

  chapter++
  if (chapter > 7) chapter = 1

  document.getElementById(`chapter${chapter}`).classList = ''
}
