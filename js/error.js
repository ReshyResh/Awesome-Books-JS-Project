/* eslint no-undef: 0 */
error = (message, color) => {
  const error = document.createElement('aside');
  error.textContent = message;
  error.id = 'error-popup';
  error.classList.add(color);
  setTimeout(() => {
    error.classList.add('fade');
  }, 500);
  document.body.appendChild(error);
  setTimeout(() => {
    document.body.removeChild(document.getElementById('error-popup'));
  }, 3500);
};
