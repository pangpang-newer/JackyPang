 import {reblog} from './article.js';
 
 console.log(reblog);
let blogHTML='';
const date=new Date();
reblog.forEach(blogs => {
  blogHTML += `

  <h1 class="title">${blogs.title}</h1>
  <p class="maincontent"> ${blogs.content} </p>
  <div class=" imgcontainer">  <img src="${blogs.picture}"  class="pimg" alt="东莞之旅"> </div>
  <p class="date"> ${date.toDateString()}  </p>
    <hr class="hrline">
 `; 
    
});

document.querySelector('.blogbox').innerHTML=blogHTML;

window.addEventListener('scroll',()=>{
  let line = document.querySelector('.progressline').style.width;
      line = window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.querySelector('.progressline').style.width=line + "%";
});
