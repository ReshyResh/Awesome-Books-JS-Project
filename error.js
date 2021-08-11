/* eslint no-undef: 0 */
error = (message, color) => {
  const error = document.createElement('aside');
  const parent = document.querySelector('.add-section');
  error.textContent = message;
  error.id = 'error-popup';
  error.classList.add(color);
  setTimeout(() => {
    error.classList.add('fade');
  }, 500);
  parent.appendChild(error);
  setTimeout(() => {
    parent.removeChild(document.getElementById('error-popup'));
  }, 3500);
};
