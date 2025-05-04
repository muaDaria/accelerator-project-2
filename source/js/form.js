document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form__group');
  const fieldEmail = form.querySelector('.form__field--email');
  const fieldPhone = form.querySelector('.form__field--phone');

  function validateEmail(email) {
    const pattern = /^[\wа-яА-ЯёЁ._%+-]+@([\wа-яА-ЯёЁ-]+\.)+[a-zA-Zа-яА-ЯёЁ]{2,}$/;
    return pattern.test(email);
  }

  function validatePhone(phone) {
    const pattern = /^((\+7)|(8))[0-9]{10}$/;
    return pattern.test(phone);
  }

  function validateField(field, validateFn, emptyMessage, invalidMessage) {
    if (!field.value.trim()) {
      field.setCustomValidity(emptyMessage);
      field.classList.add('form__field-error');
      return false;
    } else if (!validateFn(field.value)) {
      field.setCustomValidity(invalidMessage);
      field.classList.add('form__field-error');
      return false;
    } else {
      field.setCustomValidity('');
      field.classList.remove('form__field-error');
      return true;
    }
  }

  [fieldEmail, fieldPhone].forEach((field) => {
    field.addEventListener('input', () => {
      field.setCustomValidity('');
      field.classList.remove('form__field-error');
    });
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let isValid = true;

    if (!validateField(fieldEmail, validateEmail,
      'Поле Email обязательно для заполнения.',
      'Введите корректный email адрес.')) {
      isValid = false;
    }

    if (!validateField(fieldPhone, validatePhone,
      'Поле Телефон обязательно для заполнения.',
      'Введите корректный номер телефона.')) {
      isValid = false;
    }

    if (isValid) {
      form.submit();
      form.reset();
    } else {
      fieldEmail.reportValidity();
      fieldPhone.reportValidity();

      setTimeout(() => {
        if (!fieldEmail.validity.valid) {
          fieldEmail.blur();
          setTimeout(() => {
            fieldEmail.focus();
          }, 0);
        } else if (!fieldPhone.validity.valid) {
          fieldPhone.blur();
          setTimeout(() => {
            fieldPhone.focus();
          }, 0);
        }
      }, 1500);
    }
  });
});
