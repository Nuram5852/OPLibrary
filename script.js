const books = document.getElementById('books');
const myForm = document.getElementById('myForm');
const addButton = document.querySelector('#add');
const bookDisplay = document.querySelector('#bookDisplay');
const form = document.forms[0];

let myLibrary = [];
let bookBox;
let bookPages;
let bookReadStatus;

let formOpen = false;

addBookToLibrary.prototype = Object.create(Book.prototype);

//Constructor
function Book() {

}

function addBookToLibrary(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read === 'true') {
        this.read = true;
    } else {
        this.read = false
    }

    myLibrary.push(this);
}

function toggleForm() {
    if (formOpen) {
        myForm.style.display = 'none';
        addButton.style.transform = 'rotate(0)';

        formOpen = false;
    } else {
        myForm.style.display = 'block';
        addButton.style.transform = 'rotate(45deg)';

        formOpen = true;
    }
}

function updateBookDisplay() {
    bookDisplay.innerHTML = ' ';
    for (i = 0; i <= myLibrary.length - 1; i++) {
        bookBox = document.createElement('div');
        bookBox.classList.add('book-box');
        bookDisplay.append(bookBox);
        bookBox.setAttribute('data-num', `${i}`);

        addTitle();
        addAuthor();
        addPages();
        addReadToggle(i);
        addRemoveButton();
    }
}

function addTitle() {
    let bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    let text = document.createTextNode(`${myLibrary[i].title}`);
    bookTitle.append(text);
    bookBox.append(bookTitle);
}

function addAuthor() {
    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    let text = document.createTextNode(`${myLibrary[i].author}`);
    bookAuthor.append(text);
    bookBox.append(bookAuthor);
}

function addPages() {
    let bookPages = document.createElement('div');
    bookPages.classList.add('title');
    let text = document.createTextNode(`${myLibrary[i].pages}`);
    bookPages.append(text);
    bookBox.append(bookPages);
}

function addReadToggle(i) {
    let readButton = document.createElement('button');
    readButton.classList.add('read-button');
    
    (myLibrary[i].read) ? readButton.classList.add('read') : readButton.classList.add('not-read');

    let text;
    (myLibrary[i].read) ? text = document.createTextNode('Read') : text = document.createTextNode('Not Read');

    readButton.append(text);
    bookBox.append(readButton);

    readButton.addEventListener('click', toggleReadStatus);
}

function addRemoveButton() {
    let removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    let buttonText = document.createTextNode('Remove')
    removeButton.append(buttonText);
    bookBox.append(removeButton);

    removeButton.addEventListener('click', removeDisplay);
}

function removeDisplay() {
    let display = this.parentNode;
    let dataNum = this.parentNode.getAttribute('data-num');
    myLibrary.splice(`${dataNum}`, 1);
    display.remove();

    setData();
    restore();
}

function toggleReadStatus() {
    let dataNum = this.parentNode.getAttribute('data-num');
    if (myLibrary[dataNum].read) {
        myLibrary[dataNum].read = false;
    } else {
        myLibrary[dataNum].read = true;
    }

    setData();
    restore();
}

function pushToLibrary(data) {
    let book = new addBookToLibrary(data.title, data.author, parseInt(data.pages), data.read);
    setData();
    restore();
}

function setData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function restore() {
    if (!localStorage.myLibrary) {
        updateBookDisplay();
    } else {
        let objects = localStorage.getItem('myLibrary');
        objects = JSON.parse(objects);
        myLibrary = objects;
        updateBookDisplay();
    }
}

restore();

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    const entries = formData.entries();
    const data = Object.fromEntries(entries);

    pushToLibrary(data);
});