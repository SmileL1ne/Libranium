
function sayGoodLuck() {
    alert("Good luck on your shopping!")
}

function showBookTest() {
    const bookChoice = prompt("Choose a book that you would probably read first: 'War and Peace', 'Brief History of Time' or '1984'");

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
    document.getElementById("favoriteGenre").textContent= `You like "${genre}" genre books!`;
    document.getElementById("favoriteGenre").style.display = "block";
}

// All books here
const books = [
    { title: "War and Peace", author: "Lev Tolstoy" },
    { title: "Brief History of Time", author: "Stephen Hawking" },
    { title: "1984", author: "George Orwell" },
    { title: "Fight Club", author: "Chuck Palahniuk" },
    { title: "Capital", author: "Karl Marx"}
];

let booksVisible = false;

function displayAllBooks() {  
    const bookList = document.getElementById("booksList");

    if (booksVisible) {
        bookList.innerHTML = "";
        booksVisible = false;
    } else {
        books.forEach((book) => {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item list-group-item-warning";
            listItem.textContent = `Title: ${book.title}, Author: ${book.author}`;
            bookList.appendChild(listItem);
        });
        booksVisible = true;
    }
}

function validateForm(event) {
    const email = document.getElementById("inputEmail").value;
    console.log(email)
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

    if (password.length < minLength ||
        !uppercaseRegex.test(password) ||
        !lowercaseRegex.test(password) ||
        !digitRegex.test(password) ||
        !specialCharRegex.test(password)
    ) {
        return false
    } else {
        return true
    }
}

const images = ["../resources/images/Абай.jpg", "../resources/images/Фёдор.jpg", "../resources/images/boitsovskiy_klub.jpg"];
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
            alert("Countdown complete!")
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
document.getElementById("getFavoriteGenre").addEventListener("click", showBookTest);
document.getElementById("showAllBooks").addEventListener("click", displayAllBooks);
document.getElementById("validationForm").addEventListener("submit", validateForm);

  