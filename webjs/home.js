let sections= "";
           pages.forEach(page=> {
            sections +=`
           
            <div class="outerbox">
                <div class="uppic"> <img class="inneruppic" src="${page.pic}" alt=""> </div>
                <div class="belowcontent">
                    <h1 class="mini-statu">${page.mini_statu} </h1> 
                    <p class="mini-title"> <strong> ${page.mini_title} </strong></p>
                    <a href="z-library.html" class="miantext">${page.miantext}
                    </a>
                </div>  
            </div>
            `;
           });

           let section_container=document.querySelector('.outerdesign').innerHTML=sections;;
         
           console.log(sections);