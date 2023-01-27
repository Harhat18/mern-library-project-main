import React, { useState, useEffect } from "react";

import "./App.css";
import AddBook from "./component/AddBook";
import Books from "./component/Books";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    bookName: "",
    author: "",
    quantity: "",
    department: "",
    comments: "",
  });
  useEffect(() => {
    fetch("/Books")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBooks(jsonRes));
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookname: book.bookName,
      author: book.author,
      quantity: book.quantity,
      department: book.department,
      comments: book.comments,
    };
    axios.post("/nexbook", newBook);
    alert(`The book ${book.bookName} is added`);
    setBook({
      bookName: "",
      author: "",
      quantity: "",
      department: "",
      comments: "",
    });
  };
  return (
    <div className="App">
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            LIBRARY
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Books
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Add Books
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      History & Criticism
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Religious
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Music
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Study § Teaching
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Books books={books} />
      <AddBook book={book} handleChange={handleChange} addBook={addBook} />
    </div>
  );
}

export default App;
