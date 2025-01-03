import {movies} from './movies.js';

function  moviesgenerator(movies_blocks){

let movieHTML='';

movies_blocks.forEach(movie => {
  
  
     movieHTML += `
      <div class="content"> 
             <img src="${movie.pic}" class="backgroundimg"></img>
            <div class="star textdetail"><i class="fa-solid fa-star StarDetail"></i></div>

            <div class="shawbox"></div>
                <div class="label textdetail"><span>${movie.category}</span> <span>${movie.popuparity}</span></div>
                <div class="statu textdetail"><a class="clickblock" href="${movie.source}">${movie.name}</a><span>${movie.episodes}</span> </div>
            </div> `; 

                 
});

let movies_data=document.querySelector('.Submovies_container');
movies_data.innerHTML=movieHTML;

 };

 moviesgenerator(movies);

let getresult;
document.getElementById('searchbutton').addEventListener('click',()=>{
  getresult=document.getElementById('UserSearchTarget').value.toLowerCase();
    const filterpage = movies.filter(submovie=>submovie.name.toLowerCase()===getresult);
    console.log(filterpage)
    if (filterpage.length == 0 ){
      moviesgenerator(movies);
    }
    else{
      moviesgenerator(filterpage)
    }
 })

window.addEventListener('scroll',()=>{
  let line = document.querySelector('.progressline').style.width;
      line = window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.querySelector('.progressline').style.width=line + "%";
});


/* .........searching bar ..........................................................
const search = document.querySelector('.search').value;
const rebookhtml = document.querySelector('.Submovies_container').innerHTML;
console.log(search);
map(search, book => {if( book.name.includes(search){
  document.querySelector('.Submovies_container').innerHTML =`<div class="content"> 
             <img src="${movie.pic}" class="backgroundimg"></img>
            <div class="star textdetail"><i class="fa-solid fa-star StarDetail"></i></div>

            <div class="shawbox"></div>
                <div class="label textdetail"><span>${movie.category}</span> <span>${movie.popuparity}</span></div>
                <div class="statu textdetail"><a class="clickblock" href="${movie.source}">${movie.name}</a><span>${movie.episodes}</span> </div>
            </div> ` `
}});





....................................................................................*/













