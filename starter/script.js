const button1=document.getElementById("Burgir");
const navigacja=document.getElementById("Navi");  

const zegarek=document.getElementById("Clock");

const tlozeg=document.getElementById("tlozeg");


function wysun(){

navigacja.classList.toggle("show");

}

function zegar(){
    tlozeg.classList.toggle("show");
}

function interwal(){

const currentDay=document.getElementById("Day");
const day=new Date().toLocaleDateString('en-us',{weekday:'long'});

currentDay.textContent=day;

const currentHour=document.getElementById("Hour");
const hour=new Date().getHours();
const minutes=new Date().getMinutes();
const seconds=new Date().getSeconds();
const s = seconds < 10 ? `0${seconds}` : seconds;

const m=minutes<10 ? `0${minutes}` : minutes;

const h=hour<10 ? `0${hour}` : hour;

currentHour.textContent=`${h}:${m}:${s}`;



}

setInterval(interwal,1000);






zegarek.addEventListener("click",zegar)

button1.addEventListener("click",wysun)

const className = "inverted";
const scrollTrigger = 500;
const header = document.getElementById("Header");

function changeHeaderBg () {
    
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        header.classList.add(className);
      } else {
        header.classList.remove(className);
      }
}

window.addEventListener("scroll", changeHeaderBg);
