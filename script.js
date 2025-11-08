const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    read ? this.read = "Already read" : this.read = "Not Read";
}

function addBookToLibrary(title, author, pages, read) {

    let book = new Book(title, author, pages, read);
    console.log(book);
    myLibrary.push(book);
}
addBookToLibrary("Algorithms", "Dr.Hu", 222, true);
addBookToLibrary("Algorithms", "Dr.Hu2", 223, true);


function displayBooks() {

    const show_button = document.querySelector("#show");
    const dialog = document.querySelector("dialog");


    show_button.addEventListener("click", () => {

        dialog.showModal();
        displayForm();
    })

    const disLib = document.querySelector(".container");

    myLibrary.forEach((item) => {

        const card = document.createElement("div");

        card.classList.add("card");
        disLib.appendChild(card);
        const card_title = document.createElement("h2");
        card.appendChild(card_title);
        const card_author = document.createElement("h4");
        card.appendChild(card_author);
        const card_pages = document.createElement("p");
        card.appendChild(card_pages);

        card_title.innerHTML = item.title;
        card_author.innerHTML = item.author;
        card_pages.innerHTML = item.pages;
    })
}

function displayForm() {

    const dialog = document.querySelector("dialog");
    const close_button = document.querySelector("dialog > button");


    close_button.addEventListener("click", () => {
        dialog.close();
    })

    const submit = document.querySelector("#submit");

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").value;

        addBookToLibrary(title,author,pages,read);

        updateLibrary();
    })
}

function updateLibrary(){
    const cards = document.querySelectorAll(".card");
    console.log(cards);
    
    cards.forEach((card)=>{
        card.remove();
    })

    displayBooks();
}

// console.log(myLibrary);

displayBooks();