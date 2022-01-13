const books = document.getElementById('books');
const myForm = document.getElementById('myForm');
const addButton = document.querySelector('#add');
const bookDisplay = document.querySelector('#bookDisplay');


let myLibrary = [];
let bookBox;

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
    for (i = 0; i <= myLibrary.length - 1; i++) {
        bookBox = document.createElement('div');
        bookBox.classList.add('book-box');
        bookDisplay.append(bookBox);
        console.log(bookBox);
    }
}

//updateBookDisplay();
console.log(myLibrary);