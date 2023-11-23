// Function to save the arrays back to localStorage
function saveToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("books", JSON.stringify(books));
}

function loadUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const usersListDiv = document.getElementById("userList");

  usersListDiv.innerHTML = " ";

  if (users.length == 0) {
    usersListDiv.innerHTML = "<p> No registered users </p>";
    return;
  } else {
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item list-group-item-action mb-5";
      listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Password: ${user.password}`;
      listItem.href = "#";
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("btn");
      removeButton.classList.add("btn-danger");
      removeButton.classList.add("mx-4");
      removeButton.addEventListener("click", () => {
        confirmRemoveUser(user);
      });

      listItem.appendChild(removeButton);

      usersListDiv.appendChild(listItem);
    });
  }
}

function confirmRemoveUser(user) {
  const confirmation = window.confirm(
    `Are you sure you want to remove the user "${user.username}"?`
  );
  if (confirmation) {
    removeUser(user);
  }
}

function removeUser(user) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((u) => u.username === user.username);
  if (index !== -1) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers(); // Refresh the user list
  }
}

function loadBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  const books = JSON.parse(localStorage.getItem("books_info")) || [];

  for (const book of books) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item list-group-item-action mb-5";
    listItem.textContent = `Title: ${book.title}, Author: ${book.author}`;

    // Create a "Remove" button for each book
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn");
    removeButton.classList.add("mx-4");
    removeButton.classList.add("btn-danger");
    removeButton.addEventListener("click", () => {
      confirmRemoveBook(book);
    });

    listItem.appendChild(removeButton);
    bookList.appendChild(listItem);
  }
}

// Function to add a book to the books array in localStorage
function addBook() {
  const bookTitleInput = document.getElementById("bookTitleInput").value;
  const bookAuthorInput = document.getElementById("bookAuthorInput").value;

  if (bookTitleInput && bookAuthorInput) {
    const books = JSON.parse(localStorage.getItem("books_info")) || [];
    books.push({ title: bookTitleInput, author: bookAuthorInput });
    localStorage.setItem("books_info", JSON.stringify(books));
    document.getElementById("bookTitleInput").value = "";
    document.getElementById("bookAuthorInput").value = "";
    loadBooks(); // Refresh the book list
  }
}

function confirmRemoveBook(book) {
  const confirmation = window.confirm(
    `Are you sure you want to remove the book "${book.title}" by ${book.author}?`
  );
  if (confirmation) {
    removeBook(book);
  }
}

function removeBook(book) {
  const books = JSON.parse(localStorage.getItem("books_info")) || [];
  const index = books.findIndex(
    (b) => b.title === book.title && b.author === book.author
  );

  if (index !== -1) {
    books.splice(index, 1);
    localStorage.setItem("books_info", JSON.stringify(books));
    loadBooks(); // Refresh the book list
  }
}

// Initialize the page
loadUsers();
loadBooks();
