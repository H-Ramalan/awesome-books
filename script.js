"use strict";

const add = document.querySelector(".add");

let books = [];
let newBook = {
  id: "",
  title: "",
  author: "",
};

const addbook = (id, title, author) => {
  newBook.id = Date.now.toString();
  newBook.title = document.querySelector(".title").value;
  newBook.author = document.querySelector(".author").value;
  books.push(newBook);
  e.preventDefault();
  console.log("clicked");
};

add.addEventListener("click", addbook);
