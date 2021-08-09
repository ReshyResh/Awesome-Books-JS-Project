/* eslint no-unused-vars: 0 no-undef: 0 */
let id = 0;
const books = [];
if (localStorage.getItem('storage')) {
  const items = localStorage.getItem('storage');
  const parsed = JSON.parse(items);
  id = parsed.length;
  for (let i = 0; i < parsed.length; i += 1) {
    books.push(parsed[i]);
  }
}
setTimeout(() => {
  const box = document.getElementById('books');
  const count = document.createElement('h2');
  count.id = 'counter';
  box.appendChild(count);
}, 1);
add = () => {
  const form = document.getElementById('books-form');
  const title = form.title.value;
  const author = form.author.value;
  const box = document.getElementById('books');
  if (title !== '' && author !== '') {
    const book = {
      id,
      title,
      author,
    };
    id += 1;
    books.push(book);
    const bookdiv = document.createElement('div');
    bookdiv.id = id;
    bookdiv.innerHTML = `<p>${title}</p><p>${author}</p><button type="button" onclick="remove(${id}),store()">Remove</button><hr>`;
    box.appendChild(bookdiv);
    document.getElementById('counter').innerHTML = `Total number of books:${books.length}`;
  } else {
    alert('Please make sure to fill all fields!');
  }
};

remove = (n) => {
  books.splice(n, 1);
  const toremove = document.getElementById(n);
  const box = document.getElementById('books');
  const children = box.getElementsByTagName('div');
  for (let i = n; i < children.length; i += 1) {
    const button = children[i].getElementsByTagName('button');
    button[0].setAttribute('onclick', `remove(${children[i].id - 1}),store()`);
    children[i].id -= 1;
  }
  box.removeChild(toremove);
  document.getElementById('counter').innerHTML = `Total number of books:${books.length}`;
  id -= 1;
};

store = () => {
  const box = document.getElementById('books');
  const children = box.getElementsByTagName('div');
  if (children.length === 0) {
    id = 0;
  }
  localStorage.setItem('storage', JSON.stringify(books));
  localStorage.setItem('storage2', id);
};

populate = () => {
  if (localStorage.getItem('storage')) {
    const items = localStorage.getItem('storage');
    const parsed = JSON.parse(items);
    for (let i = 0; i < parsed.length; i += 1) {
      const box = document.getElementById('books');
      const bookdiv = document.createElement('div');
      bookdiv.id = i;
      bookdiv.innerHTML = `<p>${parsed[i].title}</p><p>${parsed[i].author}</p><button type="button" onclick="remove(${i}),store()">Remove</button><hr>`;
      box.appendChild(bookdiv);
    }
  }
  document.getElementById('counter').innerHTML = `Total number of books:${books.length}`;
};

window.onload = setTimeout(() => {
  populate();
}, 1);
