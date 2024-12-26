import {books} from './movies.js';

let BookHTML='';

books.forEach(book => {
     BookHTML += `
     <div class="book"> 
     <div class="leftside"><a href="#" class=""> <img src="${book.img}" class="bookimg" ></a></div>
     <div class="rightside">
       <div class="rating"><i class="fa-regular fa-star"></i> <span class="Marks">${book.rating}</span> <span class="Maxmarks">/5.0</span></div>
       <div class="pdf"><i class="fa-solid fa-file-arrow-down"></i><a class="link"  href="${book.PDFsource}"><span>Download(PDF,${book.pdffile}MB)</span></a></div>
       <div class="epub"><i class="fa-solid fa-file-arrow-down"></i><a class="link"  href="${book.EPUBsourcesource}"><span>Download(EPUB,${book.epubfile}MB)</span></a></div>


     </div>           
     
</div>`;
    
});

let Book_blocks=document.querySelector('.bookscontainer');
Book_blocks.innerHTML=BookHTML;

console.log('BookHTML');

window.addEventListener('scroll',()=>{
   let line = document.querySelector('.progressline').style.width;
       line = window.scrollY/* height of scrolled*//(document.body.scrollHeight/* whole height of that can be scrolled*/-window.innerHeight/*window content height*/ )*100;
   document.querySelector('.progressline').style.width=line + "%";
});
