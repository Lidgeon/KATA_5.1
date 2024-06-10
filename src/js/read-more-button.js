let readMoreButton = document.querySelector('.read-more-button');
let moreText = document.querySelectorAll('.text__hidden-text');

readMoreButton.addEventListener('click', function() {
  readMoreButton.setAttribute("hidden", '');
  for (let i = 0; i < moreText.length; i++) {
    moreText[i].classList.remove('text__hidden-text');
  }
});