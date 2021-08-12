/* eslint no-undef: 0 */
show = (section) => {
  const toshow = document.getElementById(section.id);
  toshow.classList.replace('invisible', 'visible');
  for (let i = 1; i <= 3; i += 1) {
    if (`s${String(i)}` !== section.id) {
      document.getElementById(`s${String(i)}`).classList.replace('visible', 'invisible');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const { DateTime } = luxon;
  const parent = document.getElementById('date');
  parent.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
});
