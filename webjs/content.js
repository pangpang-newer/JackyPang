let blogHTML='';

blogs.forEach(blog => {
     blogHTML += `
    <div class="innerblog">
    <img src="${blog.picture}" alt="alice" class="img">
    <h2><a href="#">${blog.title}</a></h2>
   </div>`;
    
});

let blog_blocks=document.querySelector('.blogbox');
blog_blocks.innerHTML=blogHTML;

window.addEventListener('scroll',()=>{
  let line = document.querySelector('.progressline').style.width;
      line = window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.querySelector('.progressline').style.width=line + "%";
});



