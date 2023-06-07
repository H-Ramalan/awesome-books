class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem("books")) || [];
    this.bookList = document.getElementById("bookList");
    this.bookForm = document.getElementById("bookForm");

    this.bookForm.addEventListener("submit", this.handleFormSubmit.bind(this));

    this.displayBookList();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
    this.displayBookList();
  }

  displayBookList() {
    this.bookList.innerHTML = "";

    this.books.forEach((book, index) => {
      const row = document.createElement("tr");

      const bookCell = document.createElement("td");
      bookCell.textContent = `"${book.title}" by ${book.author} `;

      const removeCell = document.createElement("td");
      const removeButton = document.createElement("button");
      removeButton.className = "button";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        this.removeBook(index);
      });
      removeCell.appendChild(removeButton);

      row.appendChild(bookCell);
      row.appendChild(removeCell);

      this.bookList.appendChild(row);
    });
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
    this.displayBookList();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const title = titleInput.value;
    const author = authorInput.value;
    this.addBook(title, author);
    titleInput.value = "";
    authorInput.value = "";
  }
}

const bookCollection = new BookCollection();

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('bookList');
    this.bookForm = document.getElementById('bookForm');

    this.bookForm.addEventListener('submit', this.handleFormSubmit.bind(this));

    this.displayBookList();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.updateLocalStorage();
    this.displayBookList();
  }

  displayBookList() {
    this.bookList.innerHTML = '';

    this.books.forEach((book, index) => {
      const row = document.createElement('tr');

      const bookCell = document.createElement('td');
      bookCell.textContent = `"${book.title}" by ${book.author}`;

      const removeCell = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.classList.add('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });
      removeCell.appendChild(removeButton);

      row.appendChild(bookCell);
      row.appendChild(removeCell);

      this.bookList.appendChild(row);
    });
  }

  addBook(title, author) {
    const book = { title, author };
    this.books.push(book);
    this.updateLocalStorage();
    this.displayBookList();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const title = titleInput.value;
    const author = authorInput.value;
    this.addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
  }

  updateLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

const bookCollection = new BookCollection();
bookCollection();
