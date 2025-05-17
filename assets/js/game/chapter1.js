// author: @SaurFort

function sceneOne() {
  const choice = document.getElementById('scene1Choice').value

  console.log(choice)

  if (!choice || choice > 3 || choice < 0) {
    hideNextBtn()
    return
  }

  // Dans le cas des choix 2 et 3, le karma ne change pas
  if (choice == 0) {
    karma += 2
  } else if (choice == 1) {
    karma -= 2
  }

  nextScene()
}
