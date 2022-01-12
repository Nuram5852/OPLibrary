const books = document.getElementById('books');
const myForm = document.getElementById('myForm');
const addButton = document.querySelector('#add');


let myLibrary = [];

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

console.log(myLibrary);