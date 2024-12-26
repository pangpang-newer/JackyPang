import {movies} from './movies.js';

let movieHTML='';

movies.forEach(movie => {
  
  
     movieHTML += `
      <div class="content"> 
             <img src="${movie.pic}" class="backgroundimg"></img>
            <div class="star textdetail"><i class="fa-solid fa-star StarDetail"></i></div>

            <div class="shawbox"></div>
                <div class="label textdetail"><span>${movie.category}</span> <span>${movie.popuparity}</span></div>
                <div class="statu textdetail"><a class="clickblock" href="${movie.source}">${movie.name}</a><span>${movie.episodes}</span> </div>
            </div> `; 

                 
});


let movies_blocks=document.querySelector('.Submovies_container');
movies_blocks.innerHTML=movieHTML;



window.addEventListener('scroll',()=>{
  let line = document.querySelector('.progressline').style.width;
      line = window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.querySelector('.progressline').style.width=line + "%";
});
