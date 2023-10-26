
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

function displayAllBooks() {  
    const bookList = document.getElementById("booksList");

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
}

document.getElementById("greetShopping").addEventListener("click", sayGoodLuck);
document.getElementById("getFavoriteGenre").addEventListener("click", showBookTest);
document.getElementById("showAllBooks").addEventListener("click", displayAllBooks);

  