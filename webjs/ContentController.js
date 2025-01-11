import {pages,idname} from './article.js';

function showcontent(idname, index){ 
    let htmlcontent=pages[index].eassy;
    const convertor = new showdown.Converter();
    const htmlcontainer =convertor.makeHtml(htmlcontent);
    if (document.getElementById(idname) !== null) {
        let detailcontroller = document.getElementById(idname);
        detailcontroller.innerHTML=htmlcontainer;
    } else {return;}
    console.log(htmlcontainer);
    console.log(idname);
  /* function being trigger two times in one page , so that must exist can find two id in the same page */
   /* document.getElementById(idname).innerHTML=htmlcontainer;  ???*/  
}

for (let i =0 ; i<idname.length;++i){ 
   
    for (let y =0; y<pages.length;y++)
    {   
        if(idname[i] == pages[y].idname)
            showcontent(idname[i],y);         
    }
 };


