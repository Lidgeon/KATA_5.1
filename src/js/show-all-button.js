const showAllButtons = document.querySelectorAll(".show-all-button");

const textShowAllButton = document.querySelectorAll(".show-all-button__content");
const iconShowAllButton = document.querySelectorAll(".show-all-button__icon");

const brendHeightLimiter = document.querySelector(".repair-brend-list__height-limiter");
const techtypeHeightLimiter = document.querySelector(".repair-techtype-list__height-limiter");


function showAll() {
  for(let i = 0; i < showAllButtons.length; i++) {
    if (window.innerWidth >= 768) {
      showAllButtons[i].removeAttribute("hidden", '');
    } else {
      showAllButtons[i].setAttribute("hidden", '');
  }}
}
showAll();
window.addEventListener("resize", showAll);


showAllButtons[0].addEventListener('click', function () {
  brendHeightLimiter.classList.toggle('open-status');
  if (brendHeightLimiter.classList.contains('open-status')) {
    textShowAllButton[0].textContent = 'Скрыть';
    iconShowAllButton[0].classList.add('show-all-button__icon--mirror');
  } else {
    textShowAllButton[0].textContent = 'Показать все';
    iconShowAllButton[0].classList.remove('show-all-button__icon--mirror');
  }
});

showAllButtons[1].addEventListener('click', function () {
  techtypeHeightLimiter.classList.toggle('open-status');
  if (techtypeHeightLimiter.classList.contains('open-status')) {
    textShowAllButton[1].textContent = 'Скрыть';
    iconShowAllButton[1].classList.add('show-all-button__icon--mirror');
  } else {
    textShowAllButton[1].textContent = 'Показать все';
    iconShowAllButton[1].classList.remove('show-all-button__icon--mirror');
  }
});