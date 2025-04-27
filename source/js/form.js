const form = document.querySelector('.form__group');
const fieldName = form.querySelector('.form__field--name');
const fieldPhone = form.querySelector('.form__field--phone');
const errorTextName = form.querySelector('.form__error--name');
const errorTextPhone = form.querySelector('.form__error--phone');

function formIsValid() {
  errorTextName.classList.add('visually-hidden');
  errorTextPhone.classList.add('visually-hidden');

  const name = fieldName.value;
  const phone = fieldPhone.value;

  let isValid = true;

  if (!isValidName(name)) {
    fieldName.style.borderBottom = '1px solid #ff121f';
    errorTextName.textContent = 'Введите корректное имя';
    errorTextName.style.color = '#ff121f';
    errorTextName.classList.remove('visually-hidden');
    isValid = false;
  }

  if (!isValidPhone(phone)) {
    fieldPhone.style.borderBottom = '1px solid #ff121f';
    errorTextPhone.textContent = 'Введите корректный номер телефона';
    errorTextPhone.style.color = '#ff121f';
    errorTextPhone.classList.remove('visually-hidden');
    isValid = false;
  }

  return isValid;
}

function isValidName(name) {
  const pattern = /^([A-Za-zА-Яа-яЁё]+$)|([A-Za-zА-Яа-яЁё]+\s[A-Za-zА-Яа-яЁё]+$)/;
  return pattern.test(name);
}

function isValidPhone(phone) {
  const pattern = /^((\+7)|(8))[0-9]{10}$/;
  return pattern.test(phone);
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (formIsValid()) {
    form.submit();
  }
});
