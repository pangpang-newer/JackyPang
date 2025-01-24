
/*
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
class= (".classname");
id   = ("idname") 
*/
  
document.getElementById("CFM").addEventListener('click',
()=>{
let typevalue= document.getElementById("Typeselector").value;
 getvalue(typevalue);
 console.log(LineInput);

}
);




function getvalue(valuecheck){ 
  switch(valuecheck){
case "Scatter":
  ScatterInput();
  console.log("xxxx");
break;
case "Line":
  //ask how many lines wanted?
  LineInput();
break;s
case "Bar":
  BarInput();
break;
case "Pie":
  PieInput();
break;
case "Linear":
  LinearInput();
break;
case "Multiple-lines":
  MultipleLInput();
break;
}

};


function ScatterInput(){
  let contenthtml=` <div class="dataset">
  <div class="Xaxis">
  <label class="colortest">Xaxis-Value</label>
  <input type="text" id="xvalue">
  </div>

  <div class="Yaxis">
  <label>Yaxis-Value</label>
  <input type="text" id="yvalue">
  </div>

  <div>
  <label>X-Range</label>
  <input type="text" id="xmini" placeholder="mini-value">
  <input type="text" id="xmax" placeholder="Max-value">
  </div>
  <div>
  <label>Y-Range</label>
  <input type="text" id="ymini" placeholder="mini-value">
  <input type="text" id="ymax" placeholder="Max-value">
  </div>

  <div class="options">
  <label class="testcolor">Select a Color</label>
  <select name="#" id="Cselector" class="colorSelector">
    <option class="option" style="color:Blue;">Blue</option>
    <option class="option" style="color:Green;">Green</option>
    <option class="option" style="color:Orange;">Orange</option>
    <option class="option" style="color:Yellow;">Yellow</option>
    <option class="option" style="color:Red;">Red</option>
  </select>
  <button class="Smt" id="Smt">Submit</button>
  </div>`;



  document.getElementById("Graphs").innerHTML=contenthtml;
  document.getElementById("Smt").addEventListener('click',()=>{
   
let color = document.getElementById("Cselector").value;
var colortype = color.toString();
let xvalue='';
let yvalue='';
let xmin = '';
let xmax =' ';
let ymini='';
let ymax= '';
xvalue= document.getElementById("xvalue").value;
yvalue= document.getElementById("yvalue").value;
xmin= document.getElementById("xmini").value;
xmax= document.getElementById("xmax").value;
ymini= document.getElementById("ymini").value;
ymax= document.getElementById("ymax").value;

let xminitamp= Number(xmin);
let xmaxtamp= Number(xmax);
let yminitamp= Number(ymini);
let ymaxtamp= Number(ymax);
 
function textchange(Ary){
  return Ary.split(",");
}
const xtamp = new textchange(xvalue);
const ytamp = new textchange(yvalue);

let xyValues = [];
for (var i = 0; i<xtamp.length ;i++){
  xyValues.push({x:xtamp[i],y:ytamp[i]});
}

/*7,8,9,9,9,9,10,11,14,14,15
50,60,70,80,90,100,110,120,130,140,150*/
/*40,160,6,16*/
newchart(colortype,xyValues,xminitamp,xmaxtamp,yminitamp,ymaxtamp); 
xyValues=[];
    }
  )
 
};

 function LineInput(){   //need recreate!!!
  let contenthtml=` <div class="dataset">
  <div class="Xaxis">
  <label class="colortest">Xaxis-Value</label>
  <input type="text/number" id="xvalue">
  </div>

  <div class="Yaxis">
  <label>Yaxis-Value</label>
  <input type="text/number" id="yvalue">
  </div>

  
  <div class="lineTension">
  <label>lineTension</label>
  <input type="number" id="line" min="0" max="1" step="0.1" placeholder="From 0 to 1">
  </div>
  
  <label>Y-Range</label>
  <input type="text" id="yminivalue" placeholder="mini-value">
  <input type="text" id="ymaxvalue" placeholder="Max-value">
  </div>


 
  <div class="options">
  <label>Line color</label>
  <select name="#" id="Cselector" class="colorSelector">
    <option class="option" style="color:Blue;">Blue</option>
    <option class="option" style="color:Green;">Green</option>
    <option class="option" style="color:Orange;">Orange</option>
    <option class="option" style="color:Yellow;">Yellow</option>
    <option class="option" style="color:Red;">Red</option>
  </select>
  <button class="Smt" id="Smt">Submit</button>
  </div>`;
  // get data and call function feed data to create chart
  document.getElementById("Graphs").innerHTML=contenthtml;

  document.getElementById("Smt").addEventListener('click',()=>{

let color = document.getElementById("Cselector").value;
var colortype = color.toString();
let xvalue='';
let yvalue='';
let linet = '';
let xmax =' ';
let ymini='';
let ymax= '';
xvalue= document.getElementById("xvalue").value;// array x
yvalue= document.getElementById("yvalue").value;// array y
linet= document.getElementById("line").value;  // line tension
ymini= document.getElementById("yminivalue").value;
ymax= document.getElementById("ymaxvalue").value;

let linettamp= Number(linet);
let yminitamp= Number(ymini);
let ymaxtamp= Number(ymax);

 
function textchange(Ary){
  return Ary.split(",");
}
const xtamp = new textchange(xvalue);
const ytamp = new textchange(yvalue);
linechart(xtamp,ytamp,linettamp,colortype,yminitamp,ymaxtamp)

  })

}
function BarInput(){

  let contenthtml=` <div class="dataset">
  <div class="Xaxis">
  <label class="colortest">Xaxis-Value</label>
  <input type="text" id="xvalue">
  </div>

  <div class="Yaxis">
  <label>Yaxis-Value</label>
  <input type="text" id="yvalue">
  </div>
  <div class="Barcolor">
  <label>Barcolors</label>
  <input type="text" id="yvalue" placeholder="Enter Color for Each Subbar">
  </div>

  <div class="Title">
  <label>Title-Name</label>
  <input type="text" id="Title" placeholder="Enter Title Name">
  </div>


  <div class="options">
  <label>Select a Color</label>
  <select name="#" id="Cselector" class="colorSelector">
    <option class="option" style="color:Blue;">Blue</option>
    <option class="option" style="color:Green;">Green</option>
    <option class="option" style="color:Orange;">Orange</option>
    <option class="option" style="color:Yellow;">Yellow</option>
    <option class="option" style="color:Red;">Red</option>
  </select>
  <button class="Smt" id="Smt">Submit</button>
  </div>`;
  document.getElementById("Graphs").innerHTML=contenthtml;
}
function PieInput(){
  let contenthtml=` <div class="dataset">
  <div class="Xaxis">
  <label class="colortest">Xaxis-Value</label>
  <input type="text" id="xvalue">
  </div>

  <div class="Yaxis">
  <label>Yaxis-Value</label>
  <input type="text" id="yvalue">
  </div>

  
  <div class="Piecolor">
  <label>Piecolors</label>
  <input type="text" id="yvalue" placeholder="Enter Color for Each Subpie">
  </div>

  <div class="Title">
  <label>Title-Name</label>
  <input type="text" id="Title" placeholder="Enter Title Name">
  </div>



  <div class="options">
  <label>Select a Color</label>
  <select name="#" id="Cselector" class="colorSelector">
    <option class="option" style="color:Blue;">Blue</option>
    <option class="option" style="color:Green;">Green</option>
    <option class="option" style="color:Orange;">Orange</option>
    <option class="option" style="color:Yellow;">Yellow</option>
    <option class="option" style="color:Red;">Red</option>
  </select>
  <button class="Smt" id="Smt">Submit</button>
  </div>`;
  document.getElementById("Graphs").innerHTML=contenthtml;
}

function LinearInput(){
  let contenthtml=`<div class="dataset">
  <div class="equation">
  <label class="eqtin">Equation-Text</label>
  <input type="text" id="eqt" placeholder="x * 2 + 7">
  </div>

  <div class="range">
  <label>Xaxis-Range</label>
  <input type="text" id="xminivalue" placeholder="Start-point">
  <input type="text" id="xmaxvalue" placeholder="End-point">
  </div>

  <div class="step">
  <label>Curve-Margin</label>
  <input type="number" id="step" placeholder="1,5,10,...">
  </div>

  <label>Title</label>
  <input type="text" id="title" placeholder="e.g: equation representative">
  </div>

  <div class="options">
  <label>Select a Color</label>
  <select name="#" id="Cselector" class="colorSelector">
    <option class="option" style="color:Blue;">Blue</option>
    <option class="option" style="color:Green;">Green</option>
    <option class="option" style="color:Orange;">Orange</option>
    <option class="option" style="color:Yellow;">Yellow</option>
    <option class="option" style="color:Red;">Red</option>
  </select>
  <button class="Smt" id="Smt">Submit</button>
  </div>`;
  document.getElementById("Graphs").innerHTML=contenthtml;

  document.getElementById("Smt").addEventListener('click',()=>{

    let color = document.getElementById("Cselector").value;
    var colortype = color.toString();
    let equation='';
    let xmini='';
    let xmax= '';
    let stepmargin='';
    let textamp;
    
    equation = document.getElementById("eqt").value;//
    xmini = document.getElementById("xminivalue").value;//
    xmax = document.getElementById("xmaxvalue").value;  //
    stepmargin = document.getElementById("step").value;//
    let titletext = document.getElementById("title").value;//
      textamp = titletext.toString();

    console.log(typeof textamp);
    console.log(textamp);
    let xminitamp = Number(xmini);
    let xmaxtamp = Number(xmax);
    let stepmargintamp = Number(stepmargin);

    linearchart(equation, xminitamp, xmaxtamp, stepmargintamp, colortype, textamp);


})

}
function MultipleLInput(){
 let contenthtml=`
 <div class="dataset">
 <div>
 <label>X-value</label> <input type="text/number" id="Xvalue" placeholder="1,2,3,...">
 <div><button click=Addline()>Addline</button></div>
 <div><button click=Removeline()>Removeline</button></div>
 </div>
 <div class="datarow"></div>
 </div>
 `;

 document.getElementById("Graphs").innerHTML=contenthtml;


  
};

function Addline(){
  let tableC=``;
  let tamp = `<input type="text/number" id="Xvalue" placeholder="1,2,3,...">` ;
  tableC+= tamp;
  let entrance= document.getElementsByClassName("datarow").innerHTML;
  entrance=tamp;
   }
   
function Removeline(){
   
     
   }
/*addEventListener('click',()=>{

  newchart(myChart,charttype,colortype,xyValues,0,40,160,6,16);
})*/

function newchart(color,dataset,Xmin,Xmax,Ymin,Ymax ){ 
  new Chart("myChart", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointBackgroundColor: color,
      data: dataset
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: Xmin, max:Xmax}}],
      yAxes: [{ticks: {min: Ymin, max:Ymax}}],
    }
  }
});
}

//type, subcolors,xValues,yValues,title_name 
//piechart();
function linechart(xValues,yValues,lineTension,borderColor,mini,max){
  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: lineTension,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: borderColor,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: mini, max:max}}],
        yAxes:{ticks: { stepSize:5}},
        xAxes:{ticks: { stepSize:5}}
      }
    }
  });

}


function piechart(subcolors,xValues,yValues,title_name ){
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: subcolors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: title_name
      }
    }
  });
}

// get value 
const Xvalue=[];
const Yvalue=[];
function linearchart(equation,startp,endp,step,color,textamp){
  new Chart("myChart", {
    type: "line",
    data: {
      labels: Xvalue,
      datasets: [{
        fill: false,
        pointRadius: 1,
        borderColor: color,
        data: Yvalue
      }]
    },    
    options: {
      legend: {display: true},
      title: {
        display: false,
        text: textamp,
        fontSize: 16
      }
    }
  });
  generateData(equation, startp, endp, step ) 

}
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    Xvalue.push(x);
    Yvalue.push(eval(value));
  }
}


window.addEventListener('scroll',()=>{
  let line = document.querySelector('.progressline').style.width;
      line = window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.querySelector('.progressline').style.width=line + "%";
});
