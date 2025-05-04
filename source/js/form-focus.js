document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.form__field');

  inputs.forEach((input) => {
    const label = input.previousElementSibling;

    const updateLabel = () => {
      if (input.value) {
        label.style.top = '-10px';
        label.style.opacity = '0';
      } else {
        label.style.top = '18px';
        label.style.opacity = '0.5';
      }
    };

    input.addEventListener('focus', () => {
      label.style.top = '-10px';
      label.style.opacity = '0';
    });

    input.addEventListener('blur', updateLabel);

    updateLabel();
  });
});
