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

const firstBook = new addBookToLibrary('East of Eden', 608, true);
const secondBook = new addBookToLibrary('Dandelion Wine', 281, true);

//Constructor
function Book() {

}

function addBookToLibrary(title, pages, read){
    this.title = title;
    this.pages = pages;
    this.read = read;

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
        bookBox.id = `box-${i}`;

        addTitle();
        addPages();
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

function addPages() {
    let bookPages = document.createElement('div');
    bookPages.classList.add('title');
    let text = document.createTextNode(`${myLibrary[i].pages}`);
    bookPages.append(text);
    bookBox.append(bookPages);
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
    console.log('hoops');
}

function pushToLibrary(data) {
    let book = new addBookToLibrary(data.title, parseInt(data.pages), data.read);
    setData();
    updateBookDisplay();

    console.log(myLibrary);
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
};