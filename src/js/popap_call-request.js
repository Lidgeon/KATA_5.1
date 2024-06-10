const dialog = document.getElementById('call-request')
const dialogOpeners = document.querySelectorAll('.call-button')
const dialogCloser = document.querySelector('.call-request__close-button')


function openModalAndLockScroll() {
  dialog.showModal()
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
dialogOpener.addEventListener('click', openModalAndLockScroll)
dialogCloser.addEventListener('click', (event) => {
  event.stopPropagation()
  close()
})}

function closeOnBackDropClick({ currentTarget, target }) {
  const dialog = currentTarget
  const isClickedOnBackDrop = target === dialog
  if (isClickedOnBackDrop) {
    dialog.close()
    returnScroll()
  }
}

dialog.addEventListener('click', closeOnBackDropClick)