let myLibrary = []


const btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", () =>{
    addBookToLibrary()
    displayBooks()
    
})



class Book {
    constructor(title, author, pages, read) {

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${title} by ${author} ${pages}, ${read}`;
        };

    }
}

function addBookToLibrary(){
    const title = document.getElementById("inputTitle").value
    const author = document.getElementById("inputAuthor").value
    const pages = document.getElementById("inputPages").value
    const read = document.getElementById("inputRead").value

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
    console.log(myLibrary)
    console.log(myLibrary[0].title)
    return newBook
}


function displayBooks(){
    const outputTitle = document.getElementById("latest-title")
    for(let i = 0; i < myLibrary.length; i++){
        const dataBooks = myLibrary[i]
        outputTitle.innerText = myLibrary[i].title
    }
    
}



theHobbit = new Book("The hobbit","J.R.R tolkien",
                    "295 pages","not read yet" );
theHobbit.info();