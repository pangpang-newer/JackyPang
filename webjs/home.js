import { pages } from "./article.js";


function htmlgenerator(data){ let sections= "";
data.forEach(page=> {
       sections +=`
          
           <div class="outerbox">
               <div class="uppic"> <img class="inneruppic" src="${page.pic}" alt=""> </div>
               <div class="belowcontent">
                   <h1 class="mini-statu">${page.mini_statu} </h1> 
                   <p class="mini-title"> <strong> ${page.mini_title} </strong></p>
                   <a href="${page.link}" class="miantext">${page.miantext}
                   </a>
               </div>  
           </div>
           `;
          });

         
document.querySelector('.outerdesign').innerHTML=sections;};
htmlgenerator(pages);

function typeindicator(){
    let type = pages.mini_statu;
    if (type==="uncategorized") {
        return;
    }
    else {
        let tamplate = document.querySelector('.mini-statu');
        tamplate.style.backgroundColor="#F5E1CE";
         
    }
  
};
typeindicator();

window.addEventListener('scroll',()=>{
    let line = document.querySelector('.progressline').style.width;
        line = window.scrollY/* height of scrolled*//(document.body.scrollHeight/* whole height of that can be scrolled*/-window.innerHeight/*window content height*/ )*100;
    document.querySelector('.progressline').style.width=line + "%";
});


const Tool = document.querySelector('.MiniTool');
Tool.addEventListener('click',()=>{htmlgenerator(MiniTool);});
const MiniTool = pages.filter(page=>page.mini_statu==="mini-tool");

const article = document.querySelector('.article');
const Articles = pages.filter(page=>page.mini_statu==="Article");
article.addEventListener('click',()=>{htmlgenerator(Articles);});


const recommendation = document.querySelector('.recommendation');
const recommendations = pages.filter(page=>page.mini_statu==="recommendation");
recommendation.addEventListener('click',()=>{htmlgenerator(recommendations);});

const other = document.querySelector('.other');
const others = pages.filter(page=>page.mini_statu==="Article");
other.addEventListener('click',()=>{htmlgenerator(others);});






    
  

         
        
