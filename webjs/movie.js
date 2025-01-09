
let  descriptioncont= `Coming soon. Please clicks Books`;
document.querySelector('.description').innerHTML = descriptioncont;

let intervalId = null;
function changeColor() {
  // check if an interval has already been set up
  if (!intervalId) {
    intervalId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("colorchange");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}
changeColor();





window.addEventListener('scroll',()=>{
  let line = document.querySelector('.progressline').style.width;
      line = window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.querySelector('.progressline').style.width=line + "%";
});


/* .........searching bar ..........................................................
const search = document.querySelector('.search').value;
const rebookhtml = document.querySelector('.Submovies_container').innerHTML;
console.log(search);
map(search, book => {if( book.name.includes(search){
  document.querySelector('.Submovies_container').innerHTML =`<div class="content"> 
             <img src="${movie.pic}" class="backgroundimg"></img>
            <div class="star textdetail"><i class="fa-solid fa-star StarDetail"></i></div>

            <div class="shawbox"></div>
                <div class="label textdetail"><span>${movie.category}</span> <span>${movie.popuparity}</span></div>
                <div class="statu textdetail"><a class="clickblock" href="${movie.source}">${movie.name}</a><span>${movie.episodes}</span> </div>
            </div> ` `
}});





....................................................................................*/













