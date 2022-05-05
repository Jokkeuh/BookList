let myLibrary = []

closeForm()

const titleBoxOne = document.getElementById("titleBoxOne")
const authorBoxOne = document.getElementById("authorBoxOne")
const pagesBoxOne = document.getElementById("pagesBoxOne")
const readBoxOne = document.getElementById("treadBoxOne")

const titleBoxTwo = document.getElementById("titleBoxTwo")
const authorBoxTwo = document.getElementById("authorBoxTwo")
const pagesBoxTwo = document.getElementById("pagesBoxTwo")
const readBoxTwo = document.getElementById("readBoxTwo")

const titleBoxThree = document.getElementById("titleBoxThree")
const authorBoxThree = document.getElementById("authorBoxThree")
const pagesBoxThree = document.getElementById("pagesBoxThree")
const readBoxThree = document.getElementById("readBoxThree")

const titleBoxFour = document.getElementById("titleBoxFour")
const authorBoxFour = document.getElementById("authorBoxFour")
const pagesBoxFour = document.getElementById("pagesBoxFour")
const readBoxFour = document.getElementById("readBoxFour")




// use function (e),, (e) => { e.target 
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

function createDiv(){
    let div = document.createElement("new-book")
    div.setAttribute("id","new-book")
    div.setAttribute("class","new-book")
    div.innerText = document.getElementById("book-info")
    document.body.appendChild(div)
    console.log(div)
}

function resetInput(){
    const inputs = document.querySelectorAll("#inputTitle, #inputAuthor, #inputPages, #inputRead")
    inputs.forEach(input => {
        input.value = "";
    })
}




const btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", () => {
    addBookToLibrary()
    displayBooks()
    closeForm()
    resetInput()
    open = 0
})
let open = 0

const btnToggle = document.getElementById("btnToggle")
btnToggle.addEventListener("click", () => {
  if(open === 0){
      openForm()
      open = 1;
  }else{
      closeForm()
      open = 0;
  }
        console.log(open)    
})



function openForm(open) {
    document.getElementById("myForm").style.display = "block";
    open = 1

}

function closeForm(open){
    document.getElementById("myForm").style.display = "none";
    open = 0
}



function addBookToLibrary(){
    const title = document.getElementById("inputTitle").value
    const author = document.getElementById("inputAuthor").value
    const pages = document.getElementById("inputPages").value
    const read = document.getElementById("inputRead").checked
    let newBook = new Book(title, author, pages, read)
    console.log(myLibrary)
    myLibrary.push(newBook)
    return newBook

}



function displayBooks(){
    f1 = 0;
    f2 = 1;
    f3 = 2;

    for(let i = 0; i < myLibrary.length; i++){

        titleBoxOne.innerText = myLibrary[i].title
        authorBoxOne.innerText = myLibrary[i].author
        pagesBoxOne.innerText = myLibrary[i].pages
        //readBoxOne.innerText = myLibrary[i].read

        titleBoxTwo.innerText = myLibrary[f1].title
        authorBoxTwo.innerText = myLibrary[f1].author
        pagesBoxTwo.innerText = myLibrary[f1].pages
        //readBoxTwo.innerText = myLibrary[f1].read

        titleBoxThree.innerText = myLibrary[f2].title
        authorBoxThree.innerText = myLibrary[f2].author
        pagesBoxThree.innerText = myLibrary[f2].pages
       // readBoxThree.innerText = myLibrary[f2].read

        titleBoxFour.innerText = myLibrary[f3].title
        authorBoxFour.innerText = myLibrary[f3].author
        pagesBoxFour.innerText = myLibrary[f3].pages
        //readBoxFour.innerText = myLibrary[f3].read 
        
    }
}



theHobbit = new Book("The hobbit","J.R.R tolkien",
                    "295 pages",false );
HarryPotter = new Book("Harry Potter","J.K Rowlin",
                    "450 pages",false );
lotr = new Book("Lord of the rings","J.R.R tolkien",
                    "295 pages",false );
mil = new Book("millenium trilogy","Werner Dom",
                    "711 pages",false );


myLibrary.push(theHobbit)
myLibrary.push(HarryPotter)
myLibrary.push(lotr)
myLibrary.push(mil)
closeForm()
displayBooks()
