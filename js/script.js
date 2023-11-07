function sayGoodLuck() {
  alert("Good luck on your shopping!");
}

function showBookTest() {
  const bookChoice = prompt(
    "Choose a book that you would probably read first: 'War and Peace', 'Brief History of Time' or '1984'"
  );

  if (bookChoice != null) {
    switch (bookChoice) {
      case "War and Peace":
        displayGenre("Non-finction");
        break;
      case "Brief History of Time":
        displayGenre("Science");
        break;
      case "1984":
        displayGenre("Fiction");
        break;
      default:
        alert("Invalid choice. Please choose one of the provided books");
    }
  }
}

function displayGenre(genre) {
  document.getElementById(
    "favoriteGenre"
  ).textContent = `You like "${genre}" genre books!`;
  document.getElementById("favoriteGenre").style.display = "block";
}

// All books here
const books = [
  { title: "War and Peace", author: "Lev Tolstoy" },
  { title: "Brief History of Time", author: "Stephen Hawking" },
  { title: "1984", author: "George Orwell" },
  { title: "Fight Club", author: "Chuck Palahniuk" },
  { title: "Capital", author: "Karl Marx" },
];

let booksVisible = false;

function displayAllBooks() {
  const bookList = document.getElementById("booksList");

  if (booksVisible) {
    bookList.innerHTML = "";
    booksVisible = false;
  } else {
    books.forEach((book, index) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `../html/book.html?index=${index}`;
      link.textContent = `Title: ${book.title}, Author: ${book.author}`;
      listItem.className = "list-group-item list-group-item-warning";
      link.style.textDecoration = "none";
      link.style.color = "black";
      listItem.appendChild(link);
      bookList.appendChild(listItem);
    });

    booksVisible = true;
  }
}

function validateForm(event) {
  const email = document.getElementById("inputEmail").value;
  console.log(email);
  const password = document.getElementById("inputPassword").value;
  const errorDiv = document.getElementById("error");
  const successDiv = document.getElementById("confirmation");
  errorDiv.innerHTML = "";

  if (email === "" || password === "") {
    errorDiv.innerHTML = "Both name and email are required fields";
    event.preventDefault();
  } else if (!isValidEmail(email)) {
    errorDiv.innerHTML = "Please enter a valid email address";
    event.preventDefault();
  } else if (!isValidPassword(password)) {
    errorDiv.innerHTML = "Please enter a valid password (8 characters min)";
    event.preventDefault();
  } else {
    const form = document.getElementById("validationForm");
    form.reset();
    successDiv.style.display = "block";
    successDiv.style.fontSize = "20px";
    successDiv.textContent = "Wait for news in your email!";
    event.preventDefault();
  }
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9-_.]+@(?:[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4})$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[$%#*?!^&@]/;

  if (
    password.length < minLength ||
    !uppercaseRegex.test(password) ||
    !lowercaseRegex.test(password) ||
    !digitRegex.test(password) ||
    !specialCharRegex.test(password)
  ) {
    return false;
  } else {
    return true;
  }
}

const images = [
  "../resources/images/Абай.jpg",
  "../resources/images/Фёдор.jpg",
  "../resources/images/boitsovskiy_klub.jpg",
];
let currentIndex = 0;
const slider = document.getElementById("slider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function updateSlider() {
  slider.innerHTML = `<img src="${images[currentIndex]}" alt="Image" style="width: 333px; height: 500px; object-fit: cover;">`;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

updateSlider();

function startCountdown(timerValue) {
  let countdownInterval;

  function updateTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = timerValue;
  }

  function countdownLogic() {
    timerValue--;
    updateTimer();

    if (timerValue === 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      timerValue = 10;
      alert("Countdown complete!");
    }
  }

  document.getElementById("startButton").addEventListener("click", function () {
    if (!countdownInterval) {
      countdownInterval = setInterval(countdownLogic, 1000);
    }
  });
  timerValue = 10;
}
startCountdown(10);

document.getElementById("greetShopping").addEventListener("click", sayGoodLuck);
document
  .getElementById("getFavoriteGenre")
  .addEventListener("click", showBookTest);
document
  .getElementById("showAllBooks")
  .addEventListener("click", displayAllBooks);
document
  .getElementById("validationForm")
  .addEventListener("submit", validateForm);

// diff seciton Batyrkhan

img1 = document.getElementById("img1");
img1.addEventListener("click", function () {
  destinationURL = "../html/book.html?index=2";
  window.location.href = destinationURL;
});

img2 = document.getElementById("img2");
img2.addEventListener("click", function () {
  destinationURL = "../html/book.html?index=0";
  window.location.href = destinationURL;
});

img3 = document.getElementById("img3");
img3.addEventListener("click", function () {
  destinationURL = "../html/book.html?index=1";
  window.location.href = destinationURL;
});

/* Sign up */

document.addEventListener("DOMContentLoaded", function () {
  var signUpForm = document.getElementById("signUpForm");

  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    const confirmPassword = document.getElementById(
      "signUpConfirmPassword"
    ).value;
    const username = document.getElementById("signUpUsername").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length != 0) {
      const isUsernameExists = users.some((user) => user.usernmae == username);
      if (isUsernameExists) {
        alert("This username is already used!");
        return;
      }
    }

    const userData = {
      email: email,
      username: username,
      password: password,
    };

    registerUser(userData);
  });
});

function registerUser(newUser) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const isUserExists = users.some((user) => user.email === newUser.email);
  if (users.length != 0) {
    if (isUserExists) {
      alert("This email is already registered!");
      return;
    }
  }

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Regitration successful!");

  var signUpModalEl = document.getElementById("signUpModal");
  var signUpModal = bootstrap.Modal.getInstance(signUpModalEl);
  signUpModal.hide();
}

/* Show registered users */

let usersVisible = false;

function showRegisteredUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const usersListDiv = document.getElementById("usersList");

  usersListDiv.innerHTML = "";

  if (usersVisible) {
    usersVisible = false;
    return;
  }

  if (users.length == 0) {
    usersListDiv.innerHTML = "<p> No registered users </p>";
    usersVisible = true;
    return;
  } else {
    const listGroup = document.createElement("div");
    listGroup.className = "list-group";

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item list-group-item-action";
      listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Password: ${user.password}`;
      listItem.href = "#";

      listGroup.appendChild(listItem);
    });
    usersListDiv.appendChild(listGroup);
    usersVisible = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("showUsersBtn")
    .addEventListener("click", showRegisteredUsers);
});

/* Sign In */

document.addEventListener("DOMContentLoaded", function () {
  var signInForm = document.getElementById("signInForm");

  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("signInEmail").value;
    var password = document.getElementById("signInPassword").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(function (user) {
      return user.email === email && user.password === password;
    });

    if (user) {
      alert("Sign in successful!");

      localStorage.setItem('isLoggedIn', 'true');
      checkLoginStatus();

      var signInModalEl = document.getElementById("signInModal");
      var signInModal = bootstrap.Modal.getInstance(signInModalEl);
      signInModal.hide();
    } else {
      alert("Sign in failed: Incorrect email or password.");
    }
  });
});

/* Check authorization of user */

function checkLoginStatus() {
    if (localStorage.getItem("isLoggedIn")) {
      document.getElementById("signUpButton").style.display = "none";
      document.getElementById("signInButton").style.display = "none";
      document.getElementById("orText").style.display = "none";
      document.getElementById("logoutButton").style.display = "block";
      document.getElementById("my-books").style.display = "block"
    } else {
      document.getElementById("signUpButton").style.display = "block";
      document.getElementById("signInButton").style.display = "block";
      document.getElementById("orText").style.display = "block";
      document.getElementById("logoutButton").style.display = "none"; 
      document.getElementById("my-books").style.display = "none"
    }
}

function checkUserAuthorization() {

  checkLoginStatus();

  function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('borrowedBooks');
    checkLoginStatus();
  }

  document.getElementById('logoutButton').addEventListener('click', logout); 
}

document.addEventListener("DOMContentLoaded", checkUserAuthorization);
