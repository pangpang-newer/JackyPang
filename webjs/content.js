import {blogs} from './article.js';

let blogHTML='';

blogs.forEach(blog => {
     blogHTML += `
    <div class="innerblog">
    <img src="${blog.picture}" alt="${blog.name}" class="iimg">
    <h2><a href="#">${blog.title}</a></h2>
   </div>`;
    
});

let blog_blocks=document.querySelector('.blogbox');
blog_blocks.innerHTML=blogHTML;

window.addEventListener('scroll',()=>{
    let line = document.querySelector('.progressline').style.width;
        line = window.scrollY/* height of scrolled*//(document.body.scrollHeight/* whole height of that can be scrolled*/-window.innerHeight/*window content height*/ )*100;
    document.querySelector('.progressline').style.width=line + "%";
});
