/* eslint no-undef: 0 class-methods-use-this: 0 */
let id = 0;
const books = [];
const box = document.getElementById('books');
const form = document.getElementById('books-form');
const children = box.getElementsByTagName('div');
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  add(book) {
    const bookdiv = document.createElement('div');
    bookdiv.id = this.id;
    bookdiv.classList.add('book');
    bookdiv.innerHTML = `<p>"${this.title}" by ${this.author}</p><button type="button"  class="rem" onclick="new Book().delete(${this.id})">Remove</button>`;
    box.appendChild(bookdiv);
    form.title.value = '';
    form.author.value = '';
    books.push(book);
  }

  delete(id) {
    document.body.style.overflowY = 'hidden';
    books.splice(id, 1);
    const toremove = document.getElementById(id);
    const cover = document.createElement('div');
    cover.classList.add('cover');
    cover.setAttribute('onclick', 'error(\'Please wait!\',\'red\')');
    document.body.appendChild(cover);
    for (let i = id; i < children.length; i += 1) {
      const button = children[i].getElementsByTagName('button');
      button[0].setAttribute('onclick', `new Book().delete(${children[i].id - 1})`);
      children[i].id -= 1;
    }
    for (let j = id; j < books.length; j += 1) {
      books[j].id -= 1;
    }
    id -= 1;
    localStorage.setItem('storage', JSON.stringify(books));
    localStorage.setItem('storage2', id);
    const bin = document.createElement('aside');
    bin.id = 'bin';
    document.body.appendChild(bin);
    toremove.classList.add('trash-1');
    setTimeout(() => {
      bin.classList.add('bin-1');
    }, 300);
    setTimeout(() => {
      toremove.classList.add('trash-2');
    }, 700);
    setTimeout(() => {
      box.removeChild(toremove);

      bin.classList.remove('bin-1');
      document.body.removeChild(cover);
      document.getElementById('counter').innerHTML = `Total number of books:${books.length}`;
    }, 1500);
    setTimeout(() => {
      document.body.removeChild(bin);
      document.body.style.overflowY = 'auto';
    }, 2500);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('books');
  const count = document.createElement('h2');
  count.id = 'counter';
  box.appendChild(count);
  if (localStorage.getItem('storage')) {
    const items = localStorage.getItem('storage');
    const parsed = JSON.parse(items);
    id = 0;
    for (let i = 0; i < parsed.length; i += 1) {
      const book = new Book(i, parsed[i].title, parsed[i].author);
      parsed[i].id = i;
      book.add(book);
      id += 1;
    }
    id = parsed.length;
  }
  document.getElementById('counter').innerHTML = `Total number of books:${books.length}`;
  document.getElementById('sub').addEventListener('click', () => {
    const title = form.title.value;
    const author = form.author.value;
    const book = new Book(id, title, author);
    if (title === '' || author === '') {
      error('Please fill all fields', 'red');
    } else {
      book.add(book);
      localStorage.setItem('storage', JSON.stringify(books));
      localStorage.setItem('storage2', id);
      id += 1;
      document.getElementById('counter').innerHTML = `Total number of books:${books.length}`;
      error('Book added succesfully!', 'green');
    }
  });
});
