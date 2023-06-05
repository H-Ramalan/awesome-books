"use strict";

// const storedBooks = localStorage.getItem("awesomeBooks");
// let awesomeBooks = storedBooks ? JSON.parse(storedBooks) : [];

const add = document.querySelector(".add");
// const removeBtn = document.querySelectorAll(".remove-book");

let books = [];
const bookslist = document.querySelector(".awesome-books-list");

const clearFields = () => {
  document.querySelector(".title").value = "";
  document.querySelector(".author").value = "";
};

const addbook = (event) => {
  let newbook = {
    // id: Date.now().toString(),
    title: document.querySelector(".title").value,
    author: document.querySelector(".author").value,
  };
  event.preventDefault();
  books.push(newbook);
  bookslist.innerHTML = "";

  books.forEach((item) => {
    const book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `
    <p class='book-title'>${item.title}</p>
    <p class ='book-author'>${item.author}</p>
    <button class='remove-book'>Remove</button>
    <hr>
  `;

    bookslist.appendChild(book);
  });
};

add.addEventListener("click", addbook);

const deleteButtons = document.querySelectorAll(".remove-book");
deleteButtons.forEach(() => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-book")) {
      e.parentElement.remove();
    }
  });
});

// console.log(newBook.id);
