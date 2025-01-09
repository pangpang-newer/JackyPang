import { pages } from "./article.js";


function htmlgenerator(data){ let sections= "";
data.forEach(page=> {
       sections +=`
          
           <div class="outerbox">
               <div class="uppic"> <img class="inneruppic" src="${page.pic}" alt=""> </div>
               <div class="belowcontent">
                   <h1 class="mini-statu">${page.mini_statu} </h1> 
                   <p class="mini-title"> <strong> ${page.mini_title} </strong></p>
                   <a href="${page.link}" class="miantext confetti_button"><span>${page.miantext}<span>
                   </a>
               </div>  
           </div>
           `;
          });
         
document.querySelector('.outerdesign').innerHTML=sections;

}



htmlgenerator(pages);



const triggers = document.querySelectorAll('.innerlist');
console.log(triggers);
   for( var i=0; i<triggers.length; i++){
    triggers[i].addEventListener('click', function() { confetti(
        {
            particleCount: 150,
            spread: 150,
            
          }
    );
        }  )                                           
   }

window.addEventListener('scroll',()=>{
    let line = document.querySelector('.progressline').style.width;
        line = window.scrollY/* height of scrolled*//(document.body.scrollHeight/* whole height of that can be scrolled*/-window.innerHeight/*window content height*/ )*100;
    document.querySelector('.progressline').style.width=line + "%";
});


const  filterings = document.querySelectorAll('.innerlist');

for ( var filtering of filterings){
    
     filtering.addEventListener('click',(event)=>{
         const tamp = event.currentTarget; 
         console.log(tamp);
         const label = tamp.textContent.trim(); 
         let filtered = pages.filter(page=>page.mini_statu === label);
         console.log(filtered);
         const notification = document.querySelector('.outerdesign'); 
         if(filtered.length===0){     
              htmlgenerator(pages)
       }else if (label==="All") {
              htmlgenerator(pages);
       
    }
        else{ htmlgenerator(filtered);
        }
     });
};


