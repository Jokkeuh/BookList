let myLibrary = []



closeForm()

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


function createDivAndDisplay(){


    const titleDiv = document.createElement("div")
    const authorDiv = document.createElement("div")
    const pagesDiv = document.createElement("div")
    const btnExit = document.createElement("button")
    const books = document.createElement("div")

    const readCheck = document.getElementById("inputRead").checked
    const containerDiv = document.getElementsByClassName("book-info")[0]
    const title = document.getElementById("inputTitle").value
    const author = document.getElementById("inputAuthor").value
    const pages= document.getElementById("inputPages").value
        myLibrary.push(new Book(title, author, pages))
    

        titleDiv.setAttribute("id","titleDiv")
        titleDiv.setAttribute("class","titleDiv")
        titleDiv.innerText = "title :" + title

        authorDiv.setAttribute("id","authorDiv")
        authorDiv.setAttribute("class","authorDiv")
        authorDiv.innerText = "author :" + author
        
        pagesDiv.setAttribute("id","pagesDiv")
        pagesDiv.setAttribute("class","pagesDiv")
        pagesDiv.innerText = "pages :" + pages

        btnExit.setAttribute("id","buttonExit")
        pagesDiv.setAttribute("class","buttonExit")


        books.setAttribute("id","new-book")
        books.setAttribute("class","new-book")
        books.setAttribute("name", "new-book")

        books.insertAdjacentElement("beforeend", titleDiv)
        books.insertAdjacentElement("beforeend", authorDiv)
        books.insertAdjacentElement("beforeend", pagesDiv)
        books.insertAdjacentElement("beforeend", btnExit)
        containerDiv.insertAdjacentElement("beforeend", books)

        closeOnClick()
        
        function closeOnClick() {
            btnExit.addEventListener('click', function () {
            this.parentNode.remove();
             });

            
        if(readCheck != false){
            console.log(readCheck)
            return toggleRead()
        }else{
            return
        }
    } 
    function toggleRead(){
        books.classList.add("read")
        console.log(this)
        return console.log(readCheck != false)
        }  
        
}


function resetInput(){
    const inputs = document.querySelectorAll("#inputTitle, #inputAuthor, #inputPages, #inputRead")
    inputs.forEach(input => {
        input.value = "";
    })
}



const btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", () => {
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
    return open = 1

}

function closeForm(open){
    document.getElementById("myForm").style.display = "none";
    return open = 0
}
closeForm()

