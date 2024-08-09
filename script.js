const myLibrary = [];

function Book(title, author, description, pages, read){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    return myLibrary.push(book);
}