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


