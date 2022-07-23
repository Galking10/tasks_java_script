const formRef = document.querySelector('.js-register-form');

const nameRef = document.getElementById('name');

const test1Ref = document.getElementById('test1');
const test2Ref = document.getElementById('test2');
const test3Ref = document.getElementById('test3');


formRef.addEventListener('submit', event => {
  event.preventDefault();

  // console.log("Submit", event.target.elements.name);
  // console.dir(nameRef.value)
  const formElements = event.target.elements;
  console.log(formElements.name[0].value);
  test1Ref.textContent = formElements.name[0].value;
});


// Закрытие и открытие модалки


const openModalBtn = document.querySelector('.open_modal');
const closeModalBtn = document.querySelector('.close_modal');
const backdropRef = document.querySelector('.js-backdrop');

function onOpenModal() {
  window.addEventListener('keydown', onPressEscape);
  document.body.classList.add('show_modal');
}

function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape);
  document.body.classList.remove('show_modal');
}
function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

openModalBtn.addEventListener('click', onOpenModal);

closeModalBtn.addEventListener('click', onCloseModal);

backdropRef.addEventListener('click', onBackDropClick);
