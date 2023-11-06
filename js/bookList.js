const books = JSON.parse(localStorage.getItem('books_info'));

function renderBookList() {
    const genreFilters = Array.from(document.querySelectorAll('.genre-filter:checked')).map(checkbox => checkbox.value);
    const languageFilters = Array.from(document.querySelectorAll('.language-filter:checked')).map(checkbox => checkbox.value);
    const bookList = document.getElementById('bookList');

    // Clear the current book list
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        if ((genreFilters.length === 0 || genreFilters.includes(book.genre)) &&
            (languageFilters.length === 0 || languageFilters.includes(book.language))) {
            const li = document.createElement('li');
            li.classList.add('list-group-item');

            const detailsContainer = document.createElement('div');
            detailsContainer.classList.add('book-details-container');
            detailsContainer.classList.add('rounded');
            detailsContainer.style.backgroundColor = "#FBF2E0";
            
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const imageLink = document.createElement('a');
            imageLink.href = `../html/book.html?index=${index}`;
            //imageLink.target = '_blank'; 

            const image = document.createElement('img');
            image.classList.add('m-2');
            image.style.width = '20%';
            image.src = book.image;
            image.alt = book.title; 
            imageLink.appendChild(image);

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('book-details');

            const title = document.createElement('h5');
            title.textContent = book.title;
            const author = document.createElement('p');
            author.textContent = `By: ${book.author}`;
            const publishDate = document.createElement('p');
            publishDate.textContent = `Publish Date: ${book.publish_date}`;

            detailsDiv.appendChild(title);
            detailsDiv.appendChild(author);
            detailsDiv.appendChild(publishDate);
            imgContainer.appendChild(imageLink);

            detailsContainer.appendChild(imgContainer);
            detailsContainer.appendChild(detailsDiv);

            li.appendChild(detailsContainer);

            bookList.appendChild(li);
            
            // li.textContent = `${book.title} by ${book.author}`;
            // li.classList.add('list-group-item');
            // bookList.appendChild(li);
        }
    });
}

const genreCheckboxes = document.querySelectorAll('.genre-filter');
genreCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', renderBookList);
});

const languageCheckboxes = document.querySelectorAll('.language-filter');
languageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', renderBookList);
});

// function applyFilters() {
//     renderBookList();
// }

// document.getElementById('applyFiltersBtn').addEventListener('click', applyFilters);

renderBookList();