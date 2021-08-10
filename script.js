class Book {
  constructor(id,title,author){
    this.id = id;
    this.title = title;
    this.author = author;
  }
  add(){
    const bookdiv = document.createElement('div');
    bookdiv.id = this.id;
    bookdiv.innerHTML = `<p>${this.title}</p><p>${this.author}</p><button type="button" onclick="new Book().delete(${this.id})"">Remove</button><hr>`;
    box.appendChild(bookdiv);
    const children = box.getElementsByTagName('div');
    };
  delete(id){
    books.splice(id, 1);
    const toremove = document.getElementById(id);
    const children = box.getElementsByTagName('div');
    for (let i = id; i < children.length; i += 1) {
      const button = children[i].getElementsByTagName('button');
      button[0].setAttribute('onclick', `new Book().delete(${children[i].id - 1})`);
      children[i].id -= 1;
    }
    for (let j = id; j < books.length; j += 1) {
      books[j].id -= 1;
    }
    box.removeChild(toremove);
    document.getElementById('counter').innerHTML = `Total number of books:${books.length}`;
    id -= 1;
    localStorage.setItem('storage', JSON.stringify(books));
    localStorage.setItem('storage2', id);
    };
}