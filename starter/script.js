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

currentHour.textContent=`${hour}:${minutes}:${seconds}`;



}

setInterval(interwal,1000);


zegarek.addEventListener("click",zegar)

button1.addEventListener("click",wysun)


