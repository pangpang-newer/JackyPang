import {books, movies} from './movies.js';
function bookgenerator(bookdatabase){
let BookHTML='';

bookdatabase.forEach(book => {
     BookHTML += `
     <div class="book"> 
     <div class="leftside"><a href="#" class=""> <img src="${book.img}" alt="pic error" class="bookimg" ></a></div>
     <div class="rightside">
       <div class="rating"><i class="fa-regular fa-star"></i> <span class="Marks">${book.rating}</span> <span class="Maxmarks">/5.0</span></div>
       <div class="pdf"><a class="link"  href="https://drive.google.com/uc?id=${book.PDFid}"><span>Download(PDF,${book.pdffile}MB)</span></a></div>
       <div class="epub"></i><a class="link"  href="https://drive.google.com/uc?id=${book.EPUBid}"><span>Download(EPUB,${book.epubfile}MB)</span></a></div>


     </div>           
     
</div>`;
    
});

let Book_blocks=document.querySelector('.bookscontainer');
Book_blocks.innerHTML=BookHTML;
};
bookgenerator(books);
let getresult;
document.getElementById('booksearchbutton').addEventListener('click',()=>{
  getresult=document.getElementById('SearchBookData').value.toLowerCase();
  console.log(getresult);
    const filteredbook = books.filter(subook=>subook.bookname.toLowerCase().includes(getresult));
    if (filteredbook.length == 0 ){
      bookgenerator(books);
    }
    else{
      bookgenerator(filteredbook)
    }
 })

 
const inputs = document.querySelectorAll('input');
for ( const input of inputs ){
  input.addEventListener('click', (event) => {
    const elem = event.currentTarget;
    if (elem.checked) {
      const label = elem.parentNode.textContent.trim(); 
      console.log(label);
      const filteredbook = books.filter(subook => subook.category === label);
      if (filteredbook.length == 0 ){
        bookgenerator(books);
      }
      else{
        bookgenerator(filteredbook)}
    }
    
  });

}




window.addEventListener('scroll',()=>{
   let line = document.querySelector('.progressline').style.width;
       line = window.scrollY/* height of scrolled*//(document.body.scrollHeight/* whole height of that can be scrolled*/-window.innerHeight/*window content height*/ )*100;
   document.querySelector('.progressline').style.width=line + "%";
});
