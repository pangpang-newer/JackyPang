
let date = new Date();
let blogHTML='';

reblog.forEach(blogs => {
  blogHTML += `

  <h1 class="title">${blogs.title}</h1>
  <p class="maincontent"> ${blogs.content} </p>
  <div class=" imgcontainer">  <img src="${blogs.picture}"  class="pimg" alt="东莞之旅"> </div>
  <p class="date"> ${date.toDateString()} </p>
    <hr class="hrline">
 `; 
    
});

let blog_blocks = document.querySelector('.blogbox').innerHTML=blogHTML;


console.log(blogHTML);

