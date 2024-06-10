const dialog = document.getElementById('main-menu')
const mainMenu = document.querySelector('.main-menu')

const dialogOpeners = document.querySelectorAll('.main-menu-button')
const dialogCloser = document.querySelector('.main-menu__close-button')



function openAndLockScroll() {
  mainMenu.removeAttribute("hidden", '');
  dialog.show()
  document.body.classList.add('scroll-lock')
}

function returnScroll() {
  document.body.classList.remove('scroll-lock')
}

function close() {
  dialog.close()
  returnScroll()
}

for (let i = 0; i < dialogOpeners.length; i++){
  let dialogOpener = dialogOpeners[i];
    dialogOpener.addEventListener('click', openAndLockScroll)
  dialogCloser.addEventListener('click', (event) => {
    event.stopPropagation()
    close()
  })
}

function closeOnBackDropClick({ currentTarget, target }) {
  const dialog = currentTarget
  const isClickedOnBackDrop = target === dialog
  if (isClickedOnBackDrop) {
    dialog.close()
    returnScroll()
  }
}

dialog.addEventListener('click', closeOnBackDropClick)

function showMenu() {
    if (window.innerWidth <= 1365) {
      mainMenu.setAttribute("hidden", '');
    } else {
      mainMenu.removeAttribute("hidden", '');
      
    }
}
showMenu();
window.addEventListener("resize", showMenu);