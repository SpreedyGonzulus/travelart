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
    image:"./images/Cairo.png"
  },
  {
    name:"Maze bank",
    city:"Los Santos",
    view:"Desert View",
    date:"20jan-12feb",
    price:80,
    rate:3,
    image:"./images/Giza.png"
  },
  {
    name:"Diamond Casino",
    city:"Los Angeles",
    view:"Sea View",
    date:"12jan-12feb",
    price:90,
    rate:5,
    image:"./images/Hurghada.png"
  },
  {
    name:"Los Pallet",
    city:"California",
    view:"Sea View",
    date:"12july-12juny",
    price:45,
    rate:2,
    image:"./images/Alexandria.png"
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

const karty=document.getElementById("Karty");

// const URL = `https://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=${KEY}`;

// const URL= `const URL = https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`

const allWeather = async () => {
  const URL = `http://api.openweathermap.org/data/2.5/group?id=360630,360995,361291,361058&units;=metric&appid=${KEY}`
  const weather = await(await fetch(URL)).json();
  return [...weather.list];
}

const getCitiesWeather =(cities)=> {
  const citiesArray=[];
  cities.forEach(city => {
    citiesArray.push({
      name: city.name,
      desc: city.weather[0].description,
      temp: city.main.temp,
      humidity: city.main.humidity

    })
   })
   citiesArray.forEach((city)=> generateCity(city));
}
let citiesWeather = allWeather().then(getCitiesWeather);

const generateCity=(city)=>{
  const card = document.createElement("div");
  card.classList.add("card")
  card.innerHTML= `
  <img src="./images/${city.name}.png">
            <div class="cardinfo">
                <h3 class="miejsce">${city.name}</h3>
                <p class="sytuacja">${city.desc}</p>

                <p class="temperatura"><i class="bi bi-thermometer-half"></i>${convertToCelsius(city.temp)}</p>

                <p class="wilgotnosc"><i class="bi bi-droplet-half"></i>${city.humidity}</p>
            </div>
  `
  karty.appendChild(card);
}

const showWeather = async(lat,lon) => {

const URL= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`

const pogoda=document.getElementById("Stopnie");
const pogoda1=document.getElementById("Stopnie2");
const pogoda2=document.getElementById("Stopnie3");
const pogoda3=document.getElementById("Stopnie4");
const lokacja=document.getElementById("Lokacja");

const data = await fetch(URL);

const weather=await data.json();
console.log(weather);

pogoda.textContent=convertToCelsius(weather.main.temp_max);
pogoda1.textContent=convertToCelsius(weather.main.temp_min);
pogoda2.textContent=weather.main.humidity+"%";

pogoda3.textContent=weather.wind.speed+"km/h";
lokacja.textContent="Weather in "+ weather.name;

}

const convertToCelsius=(temp)=> {
  const result=temp -273.15
  return result.toFixed()+ "°C";

}

navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat, lon)
  
  showWeather(lat,lon);

});
