const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    read ? this.read = "Already read" : this.read = "Not Read";
}

Book.prototype.changeStatus = function(){
    if (this.read == "Already read"){
        this.read = "Not Read"
    }
    else{
        this.read = "Already read"
    }
}

function addBookToLibrary(title, author, pages, read) {

    let book = new Book(title, author, pages, read);
    console.log(book);
    myLibrary.push(book);
}

addBookToLibrary("title","auth",12,true)

function displayBooks() {

    const disLib = document.querySelector(".container");

    if (myLibrary.length != 0) {

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
            const card_read = document.createElement("p");
            card.appendChild(card_read);

            const delete_card = document.createElement("button");
            card.appendChild(delete_card);
            delete_card.innerHTML = `Remove Book`;
            delete_card.classList.add("del-btn");
            delete_card.setAttribute("data-id-number", item.id);

            change_readStatus = document.createElement("button");
            card.appendChild(change_readStatus);
            change_readStatus.innerHTML="Change Read Status"
            change_readStatus.addEventListener("click",()=>{
                item.changeStatus();
                updateLibrary();
                console.log(myLibrary);
            })

            delete_card.addEventListener("click", (event) => {
                deleteBook(event);
            });

            card_title.innerHTML = item.title;
            card_author.innerHTML = item.author;
            card_pages.innerHTML = item.pages + " pages";
            card_read.innerHTML = item.read;
        })
    }
}

function displayForm() {

    const dialog = document.querySelector("dialog");
    const close_button = document.querySelector("dialog > button");
    const show_button = document.querySelector("#show");

    show_button.addEventListener("click", () => {

        dialog.showModal();

    })

    close_button.addEventListener("click", () => {
        dialog.close();
    })

    const submit = document.querySelector("#submit");

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let read = document.querySelector("#read").value;
        addBookToLibrary(title, author, pages, read);
        updateLibrary();

    })
}

function updateLibrary() {
    const cards = document.querySelectorAll(".card");
    console.log(cards);

    cards.forEach((card) => {
        card.remove();
    })

    displayBooks();
}

function deleteBook(event) {

    let id_num = (event.target).dataset.idNumber;

    myLibrary.forEach((item) => {
        if (item.id == id_num) {
            myLibrary.splice(myLibrary.indexOf(item), 1);
        }

    });

    const card_type = document.querySelectorAll(`[data-id-number="${id_num}"]`);

    card_type.forEach((card) => {
        card.remove();
    });
    updateLibrary();

}


displayForm();
displayBooks();