window.addEventListener("load",init);

function init(){

    ajaxnews('https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=c08022f8c6bebd711e02502326662b2a');

   
    document.querySelector(".slider").addEventListener("click",openslidemenu);
    
    document.querySelector(".btn-close").addEventListener("click",closeslidemenu);

    var nm= document.querySelectorAll(".main-nav a , .side-nav :not(:first-child)");
    for(var i=0; i<nm.length;i++){
        nm[i].addEventListener("click",getData);
    }

    getweather();
   document.querySelector("header h1 a").addEventListener("click",loadhome);
   


  
}

function loadhome(){
    document.querySelector(".news").innerHTML="";
    ajaxnews('https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=c08022f8c6bebd711e02502326662b2a');

}

function displayWeather(d){
    // console.log(d.main.pressure);
var temp=d.main.temp-273.15;
// var mintemp=d.main.temp_min-273.15;
// var maxtemp=d.main.temp_max-273.15;
//     document.querySelector(".top-box-a img").src=`http://openweathermap.org/img/w/${d.weather[0].icon}.png`
//     document.querySelector(".top-box-a :last-child").innerHTML=`${temp}&deg;C`;

// document.querySelector(".top-box-b").innerHTML=`<h3>Min:${mintemp}&deg;C</h3><h3>Max:${maxtemp}&deg;C</h3><h3>${d.weather[0].main}</h3><h3></h3><h3></h3>`

document.querySelector(".top-box-a").innerHTML=`<h3 class="date"></h3>`;
getDate();






}
function getweather(){
   ajaxweather('https://api.openweathermap.org/data/2.5/weather?q=Kolkata,in&appid=22e0ccf35e1e3fe7bc730cbbc7618648');
// console.log(info.main.temp);

}
function getData(event){
var a=event.target.innerHTML;
    document.querySelector(".news").innerHTML="";

    ajaxnews('https://gnews.io/api/v4/top-headlines?lang=en&country=in&category='+a+'&token=c08022f8c6bebd711e02502326662b2a');

}


function openslidemenu(){

    document.querySelector("#side-menu").style.width='250px';
    document.querySelector("#side-menu").style.zIndex='20';

}
function closeslidemenu(){
    document.querySelector("#side-menu").style.width='0';
}



function getDate(){

    var today = new Date();
    var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()+'<br>'+' ('+weekday[today.getDay()]+')';
    document.querySelector(".date").innerHTML=date;
}


function addItem(a){

    //  console.log(a);
   
     document.querySelector(".news").innerHTML=document.querySelector(".news").innerHTML+` <section class="info"><img src="${a.urlToImage}" alt="news"> <div><h2>${a.title}</h2>  <p>${a.description}</p> <a href="${a.url}" >Read More</a> </div> </section>`;
    
         }





