let id = 0;
const books = [];
function add() {
  const form = document.getElementById('books-form');
  const title = form.title.value;
  const author = form.author.value;
  const book = {
    id,
    title,
    author
  };
  id += 1;
  books.push(book);
  const box = document.getElementById('books');
  const bookdiv = document.createElement('div');
  bookdiv.id = id;
  bookdiv.innerHTML = `<p>${title}</p><br><p>${author}</p><button type="button" onclick="remove(${id}),store()">Remove</button><hr>`
  box.appendChild(bookdiv);
}
function remove(n) {
  books.splice(n-1,1);
  const box = document.getElementById('books');
  const toremove = document.getElementById(n);
  const children = box.getElementsByTagName('div');
  for (let i = n;i < children.length; i += 1) {
    const button = children[i].getElementsByTagName('button');
    button[0].setAttribute('onclick','remove('+(children[i].id-1)+'),store()');
    children[i].id = (children[i].id-1);
  }
  box.removeChild(toremove);
}