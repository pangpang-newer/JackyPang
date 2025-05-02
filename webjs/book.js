fetch('../Database/books.json').then(response => {
  return response.json();
}).then(data => {    
 const books = data;  
 bookgenerator(books);
 Selector(books);
 Sorting(books)
})

function bookgenerator(bookdatabase){
let BookHTML='';

bookdatabase.forEach(book => {
     BookHTML += `
     <div class="book"> 
     <div class="leftside"><a href="#" class=""> <img src="https://img.131213.xyz/api/cfile/${book.img}" alt="pic error" class="bookimg" ></a></div>
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


function Selector(subject){
let getresult;
document.getElementById('booksearchbutton').addEventListener('click',()=>{
  getresult=document.getElementById('SearchBookData').value.toLowerCase();
  console.log(getresult);
    const filteredbook = subject.filter(subook=>subook.bookname.toLowerCase().includes(getresult));
    if (filteredbook.length == 0 ){
      bookgenerator(subject);
      document.getElementsByClassName('bookscontainer')[0].innerHTML = `<p1  style="color:black; font-size:18px;width:1200px ; text-align:center" >Sorry, No such book found</p1>`;
    }
    else{
      bookgenerator(filteredbook)
    }
 })
};


function Sorting(sortbook){

const inputs = document.querySelectorAll('input');
for ( const input of inputs ){
  input.addEventListener('click', (event) => {
    const elem = event.currentTarget;
    if (elem.checked) {
      const label = elem.parentNode.textContent.trim(); 
      
      const filteredbook = sortbook.filter(subook => subook.category === label);
      if (filteredbook.length == 0 ){
        bookgenerator(sortbook);
      }
      else{
        bookgenerator(filteredbook)}
    }
    
  });

}
};



window.addEventListener('scroll',()=>{
   let line = document.querySelector('.progressline').style.width;
       line = window.scrollY/* height of scrolled*//(document.body.scrollHeight/* whole height of that can be scrolled*/-window.innerHeight/*window content height*/ )*100;
   document.querySelector('.progressline').style.width=line + "%";
});
