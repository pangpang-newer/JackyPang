let movieHTML='';

movies.forEach(movie => {
  
  if (movie.description==="x") {
    movie.description= 'I am busy that there is nothing here! You can write description for me in attribute of comment! You all are the best. ****************************************';
  };
     movieHTML += `
     <div class="subblogs ">
            <div class="left">
              <img class="img_container1" src="${movie.pic}">  
              <div class="hyprolink"><a class="link" href="${movie.source}"> ${movie.name}</a></div>
            </div>

            <div class="desc_container">
              <p class="desc">${movie.description}</p>
            </div> 

       </div> `; 
     
});



let movies_blocks=document.querySelector('.content');
movies_blocks.innerHTML=movieHTML;
console.log(movies.description);


