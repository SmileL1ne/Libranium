const storedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];

function displayBooks() {
    const bookList = document.getElementById('my-book-list');

    bookList.innerHTML = '';

    if (storedBooks.length === 0) {
        const noBooksHeader = document.createElement('h2');
        noBooksHeader.textContent = "You haven't borrowed any books yet";
        bookList.appendChild(noBooksHeader);
    } else {
        storedBooks.forEach((book, index) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');

            const detailsContainer = document.createElement('div');
            detailsContainer.classList.add('book-details-container');
            // detailsContainer.classList.add('rounded');
            // detailsContainer.style.backgroundColor = "#FBF2E0";
            
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const imageLink = document.createElement('a');
            imageLink.href = `../html/book.html?index=${index}`;
            //imageLink.target = '_blank'; 

            const image = document.createElement('img');
            image.classList.add('m-2');
            image.style.width = '15%';
            image.src = book.image;
            image.alt = book.title; 
            imageLink.appendChild(image);

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('book-details');

            const title = document.createElement('h5');
            title.textContent = book.title;

            const readButton = document.createElement('button');
            readButton.textContent = 'Read';
            readButton.classList.add('btn');
            readButton.classList.add('btn-primary');
            readButton.addEventListener('click', () => {
                window.location.href = book.link;
            });
            

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('btn');
            removeButton.classList.add('btn-danger');
            removeButton.addEventListener('click', () => {
                removeBook(book);
            });

            detailsDiv.appendChild(title);
            detailsDiv.appendChild(readButton);
            detailsDiv.appendChild(removeButton);
            imgContainer.appendChild(imageLink);

            detailsContainer.appendChild(imgContainer);
            detailsContainer.appendChild(detailsDiv);

            li.appendChild(detailsContainer);

            bookList.appendChild(li);

        });
    }

}

function removeBook(book) {
    const index = storedBooks.indexOf(book);
    if (index !== -1) {
        storedBooks.splice(index, 1);
        localStorage.setItem('borrowedBooks', JSON.stringify(storedBooks));
        displayBooks();
    }
}

function checkLoginStatus() {
    if (localStorage.getItem("isLoggedIn")) {
      document.getElementById("my-books").style.display = "none";
    } else {
      document.getElementById("my-books").style.display = "block";
    }
}

displayBooks();