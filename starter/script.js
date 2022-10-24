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



const hotels = [
  {
    name:"King Hotel",
    city:"Cair",
    view:"Mountain View",
    date:"30 oct-4 nov",
    price:120,
    rate:4,
    image:"./images/Widget 1.png"
  },
  {
    name:"Maze bank",
    city:"Los Santos",
    view:"Desert View",
    date:"20jan-12feb",
    price:80,
    rate:3,
    image:"./images/Widget 2.png"
  },
  {
    name:"Diamond Casino",
    city:"Los Angeles",
    view:"Sea View",
    date:"12jan-12feb",
    price:90,
    rate:5,
    image:"./images/Widget 3.png"
  },
  {
    name:"Los Pallet",
    city:"California",
    view:"Sea View",
    date:"12july-12juny",
    price:45,
    rate:2,
    image:"./images/Widget 4.png"
  }



  
]

const hotelsWrapper=document.getElementById("Hotelswrapper");



hotels.forEach( (hotel) => {
const card=document.createElement("article");
 card.classList.add("hotelcard");
 

 const hotelinfo=document.createElement("div");
 hotelinfo.classList.add("hotelinfo");

const name= document.createElement("h3");
name.classList.add("hotelinfo");

const hotelname=`${hotel.name},${hotel.city}` 

name.textContent = hotelname.length > 14 ? hotelname.slice(0,14) + "..." : hotelname;

const image =document.createElement("img");
 image.src=hotel.image


 const icon=document.createElement("span");
 icon.innerHTML=`<i class="bi bi-star-fill"></i>4`

 const rate=document.createElement("ocena");
 rate.textContent=hotel.rate

 const widok_hot=document.createElement("div");
 widok_hot.innerHTML=`<p class="opis_hot">${hotel.view}</p>`

 const data=document.createElement("div");
 data.innerHTML=`<p class="opis_hot">${hotel.date}</p>`

 const opis_hot=document.createElement("div");
 opis_hot.classList.add("cena");
 opis_hot.innerHTML=`<p class="cena_hot"><b>$${hotel.price}</b> per night</p>`
 



card.appendChild(image);

hotelinfo.appendChild(name);
card.appendChild(hotelinfo);

hotelinfo.appendChild(icon);
card.appendChild(widok_hot);
card.appendChild(data);
card.appendChild(opis_hot);

hotelsWrapper.appendChild(card);

})









const KEY='912c622485ebcccfe6e75ebb3dc2de10';

const URL = `https://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=${KEY}`;

const showWeather = async() => {

const pogoda=document.getElementById("Stopnie");





const data = await fetch(URL);



const weather=await data.json();


pogoda.textContent=weather.main.temp_max;





}

showWeather();























// const users = [
//   {
//       name:"Jan",
//       city:"Katowice",
//       role:"Front and Developer"
//   },
//   {
//       name:"Anna",
//       city:"Krakow",
//       role:"Backend Developer"

//   },
//   {
//       name:"Zbigniew",
//       city:"Wroclaw",
//       role:"Grafik"
//   }
// ]

// const wrapper=document.getElementById("Wrapper");

// users.forEach(function(user){
//   const card=document.createElement("article");
//   card.classList.add("card");

//   const name=document.createElement("h2");
//   name.textContent=user.name;
  
//   const city=document.createElement("h3");
//   city.textContent=user.city;

//   const role=document.createElement("p");
//   role.textContent=user.role;

//   card.appendChild(name);
//   card.appendChild(city);
//   card.appendChild(role);


// wrapper.appendChild(card);

// })