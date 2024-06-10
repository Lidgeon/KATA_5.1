const feedbackPhone = document.querySelector('#feedback-user-phone');
const callrequestPhone = document.querySelector('#call-request-user-phone');

function phoneClick() {
  this.value = '+7';
  this.removeEventListener('click', phoneClick);
}


feedbackPhone.addEventListener('click', phoneClick);
callrequestPhone.addEventListener('click', phoneClick);
