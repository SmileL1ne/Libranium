const urlParams = new URLSearchParams(window.location.search);
const bookIndex = urlParams.get("index");

const books_info = [
    {
        title : "War and Peace",
        image : "../resources/images/voina_i_mir.jpg",
        author : "Leo Tolstoy",
        genre : "Historical novel",
        description : "War and Peace is a literary work by Russian author Leo Tolstoy. Set during the Napoleonic Wars, the work mixes fictional narrative with chapters discussing history and philosophy. First published serially beginning in 1865, the work was rewritten and published in its entirety in 1869. It is regarded as Tolstoy's finest literary achievement and remains an internationally praised classic of world literature.[1][2][3] The work chronicles the Napoleonic era within Russia, notably detailing the French invasion of Russia and its aftermath. The book highlights the impact of Napoleon on Tsarist society through five interlocking narratives following different Russian aristocratic families.",
        publish_date : "1869",
        publisher : "The Russian Messenger",
        language : "Russian",
        pages : "1225"

    },
    {
        title : "A Brief History of Time",
        image : "../resources/images/BriefHistoryTime.jpg",
        author : "Stephen Hawking",
        genre : "Scientific",
        description : "A Brief History of Time: From the Big Bang to Black Holes is a book on theoretical cosmology by English physicist Stephen Hawking. It was first published in 1988. Hawking wrote the book for readers who had no prior knowledge of physics. In A Brief History of Time, Hawking writes in non-technical terms about the structure, origin, development and eventual fate of the Universe, which is the object of study of astronomy and modern physics. He talks about basic concepts like space and time, basic building blocks that make up the Universe (such as quarks) and the fundamental forces that govern it (such as gravity). He writes about cosmological phenomena such as the Big Bang and black holes. He discusses two major theories, general relativity and quantum mechanics, that modern scientists use to describe the Universe. Finally, he talks about the search for a unifying theory that describes everything in the Universe in a coherent manner. The book became a bestseller and sold more than 25 million copies.",
        publish_date : "1988",
        publisher : "Bantam Dell Publishing Group",
        language : "English",
        pages : "256"

    },
    {
        title : "1984",
        image : "../resources/images/1984.jpg",
        author : "George Orwell",
        genre : "Dystopia",
        description : "Nineteen Eighty-Four (also known as 1984) is a dystopian novel by George Orwell, published in 1949. It explores the consequences of totalitarianism, mass surveillance, and manipulation of truth. The story is set in the year 1984 in a world at perpetual war. Great Britain, now Airstrip One, is controlled by the totalitarian superstate Oceania, led by the cult-like figure Big Brother. Government surveillance, historical manipulation, and propaganda stifle individuality and independent thought. The protagonist, Winston Smith, works for the Party but secretly rebels and falls in love with Julia. They discover a resistance group, the Brotherhood, but are betrayed and arrested. After months of torture, Winston comes to love Big Brother and the Party.",
        publish_date : "8 June 1949",
        publisher : "Secker & Warburg",
        language : "English",
        pages : "328"

    },
    {
        title : "Fight Club",
        image : "../resources/images/Fightclub.jpg",
        author : "Chuck Palahniuk",
        genre : "Satirical novel",
        description : "Fight Club is a 1996 novel by Chuck Palahniuk. It follows the experiences of an unnamed protagonist struggling with insomnia. Inspired by his doctor's exasperated remark that insomnia is not suffering, the protagonist finds relief by impersonating a seriously ill person in several support groups. Then he meets a mysterious man named Tyler Durden and establishes an underground fighting club as radical psychotherapy. An anonymous narrator works as a product recall specialist for a car company. Because of the stress of his job and the jet lag brought upon by frequent business trips, he begins to suffer from recurring insomnia. When he seeks treatment, his doctor advises him to visit a support group for testicular cancer victims to see what real suffering is like. He finds that sharing the problems of others—despite not having testicular cancer himself—alleviates his insomnia.",
        publish_date : "17 August, 1996",
        publisher : "W. W. Norton",
        language : "English",
        pages : "208"

    },
    {
        title : "Capital",
        image : "../resources/images/dascapital.jpg",
        author : "Karl Max",
        genre : "Scientific",
        description : "Capital: A Critique of Political Economy, written by Karl Marx and published in three volumes between 1867 and 1894, is a foundational work in materialist philosophy and the critique of political economy. Marx analyzes capitalism, applying his theory of historical materialism to reveal the economic laws of modern society. The text, completed posthumously by Friedrich Engels, is a significant reference in the social sciences prior to 1950. It views capitalism not just as an economic model but as a historical epoch and mode of production, examining its origins, development, and inevitable decline. Marx asserts that capitalism contains inherent contradictions that will lead to its collapse. Das Kapital is both a scientific research-based work and a critique of capitalism, challenging the idea that it is a harmonious and stable system put forth by bourgeois political economists.",
        publish_date : "1867-1894",
        publisher : "Verlag von Otto Meisner",
        language : "German",
        pages : "555"

    },
    {
        title : "The Idiot",
        image : "../resources/images/idiot.jpg",
        author : "Fyodor Dostoevsky",
        genre : "Satirical novel",
        description : "The title is an ironic reference to the central character of the novel, Lev Nikolayevich Myshkin, a young prince whose goodness, open-hearted simplicity, and guilelessness lead many of the more worldly characters he encounters to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, Dostoevsky set himself the task of depicting the positively good and beautiful man. The novel examines the consequences of placing such a singular individual at the centre of the conflicts, desires, passions, and egoism of worldly society, both for the man himself and for those with whom he becomes involved.",
        publish_date : "1868-69",
        publisher : "The Russian Messenger",
        language : "Russian",
        pages : "448"

    },
    {
        title : "Mein Kampf",
        image : "../resources/images/mein_kampf.jpg",
        author : "Adolf Hitler",
        genre : "Autobiography",
        description : "Hitler began Mein Kampf while imprisoned following his failed coup in Munich in November 1923 and a trial in February 1924 for high treason, in which he received a sentence of five years. Although he received many visitors initially, he soon devoted himself entirely to the book. As he continued, he realized that it would have to be a two-volume work, with the first volume scheduled for release in early 1925. The governor of Landsberg noted at the time that he [Hitler] hopes the book will run into many editions, thus enabling him to fulfill his financial obligations and to defray the expenses incurred at the time of his trial. After slow initial sales, the book became a bestseller in Germany following Hitler's rise to power in 1933.",
        publish_date : "18 July 1925",
        publisher : "Franz Eher Nachfolger",
        language : "German",
        pages : "720"

    },
    {
        title : "Total Recall: My Unbelievably True Life Story",
        image : "../resources/images/arnold.jpg",
        author : "Arnold Schwarzenegger",
        genre : "Autobiography",
        description : "The book begins in Austria, where Schwarzenegger was born, and explains why he dreamed of moving to America. By the time he was twenty-one, Schwarzenegger was living in Los Angeles and had been crowned Mr. Universe. Within five years, Schwarzenegger became the greatest bodybuilder in the world and by his thirties, he was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. ",
        publish_date : "2012",
        publisher : "Simon and Schmidt Inc.",
        language : "English",
        pages : "637"

    }

];

localStorage.setItem('books_info', JSON.stringify(books_info));



   
    const book = books_info[bookIndex];
    document.querySelector('div h1').textContent = book.title;
    document.querySelector('.book-cover img').src = book.image;
    document.querySelector('#author').textContent = book.author;
    document.querySelector('#genre').textContent = book.genre;
    document.querySelector('#description').textContent = book.description;
    document.querySelector('#publish-date').textContent = book.publish_date;
    document.querySelector('#publisher').innerHTML = book.publisher;
    document.querySelector('.language').textContent = book.language;
    document.querySelector('.pages').innerHTML = book.pages;

link = document.getElementById("random");

link.addEventListener("click", (event) => {
    event.preventDefault();

    const userConfirmed = confirm("Are you sure you want leave this page and visit random book?");

    if (userConfirmed) {
        const randomIndex = Math.floor(Math.random() * books_info.length);
        window.location.href = `../html/book.html?index=${randomIndex}`;
    } else {
        alert("The random book operation declined !");
    }
});

buyButton = document.getElementById("buy-btn");

function countdown() {
    let timeLeft = parseInt(buyButton.textContent.match(/\d+/)[0])

    if (timeLeft > 0) {
        timeLeft--;
        buyButton.textContent = `Buy with discount! (${timeLeft})`;
    } 
    else {
        clearInterval(countdownInterval);
        alert("Countdown reached zero! YOU CAN'T BUY WITH DISCOUNT ANYMORE");
        buyButton.textContent = "Buy";
        buyButton.classList.replace("btn-danger", "btn-success");
    }
}

window.addEventListener("load", function () {
    countdownInterval = setInterval(countdown, 1000);
});

function redirectToRead(){
    readURL = "https://uzts.uz/wp-content/uploads/2020/08/tolstojvojnaimirtom_1_2..pdf";
    window.location.href = readURL;
}
