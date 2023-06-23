var bttn = document.querySelector("#sumbit");
var city = document.querySelector("#cityname");
var cityp = document.querySelector("#city");
var sky = document.querySelector("#sky");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var icon = document.querySelector("#icon");
var result = document.querySelector(".result");
var background = document.querySelector("#bg");
var head = document.querySelector("h1");
var gif = document.getElementById("gif");
var restart = document.querySelector(".basicBox")
var input = document.querySelector(".input");

function func(event) {
    if (event.keyCode === 13) {
     sumb();
}}

restart.addEventListener("click", ()=>{
    window.location.reload();
});

function sumb(){
   
    var text = city.value;
    if (text === "")
    {
        alert("Please enter a city.");
        return 
    }
    fetchWeatherData(text);
    result.style.animation = " pop 2s linear ";
    result.style.opacity = "1";
    background.style.animation = " pop 3s linear ";
    background.style.opacity = "1";
    gif.style.animation =  "rotation 3s ease "; 
    input.style.display = "none";
    result.style.paddingTop = "70px";
}

function fetchWeatherData(text){
API ="7d7a5b434d1d374550de819384e2ebd5";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API}`)

.then(
    res => res.json()
)

.then(
    data => {
        console.log(data)
        if (data["message"] === "city not found")
        {
            alert("City not found!!")
            return
        }
        else
        {
            cityp.innerHTML = data.name;
            sky.innerHTML   = data.weather[0].main;
             temp.innerHTML  = `Temperature : ${Math.round(data.main.temp - 273.15)}℃`;
             wind.innerHTML  = `Wind speed : ${data.wind.speed}km/hr`;
             humidity.innerHTML = `Humidity : ${data.main.humidity}%`;
             icon.innerHTML = data.weather[0].icon;
             setBackground(sky.innerHTML);
            
        }
    }
)
}

function setBackground(weather) {

    if (weather === "Rain") {
        background.style.backgroundImage = "url('./resources/rainy-weather-min.webp')";
        head.style.color = "white"; 
        gif.src = "./resources/icons/rain-min.gif";
        
    } else if (weather === "Snow") {
        background.style.backgroundImage = "url('./resources/0.webp')"; 
        head.style.color = "rgb(9, 55, 108);"
        gif.src = "./resources/icons/snowflake-min.gif";
    } else if (weather === "Clear") {
        background.style.backgroundImage = "url('./resources/sunny-weather-min.webp')"; 
        head.style.color = "white"; 
        gif.src = "./resources/icons/sun-min.gif";
    } else if (weather === "Clouds") {
        background.style.backgroundImage = "url('./resources/cloudy-weather-min.webp')"; 
        head.style.color = "white"; 
        gif.src = "./resources/icons/cloudy-min.gif";
    }else if (weather === "Haze") {
        background.style.backgroundImage = "url('./resources/4cc912d13836970e2c10dc3fcc1d1f4a-sd-min.webp')"; 
        head.style.color = "rgb(110, 16, 252)";
        gif.src = "./resources/icons/icons8-haze-min.gif";
     }else if (weather === "Smoke") {
        background.style.backgroundImage = "url('./resources/pat-whelen-mTB9yyAkZQY-unsplash-min.webp')"; 
        head.style.color = "white";
        gif.src = "./resources/icons/whirlwind-min.gif";
    }
}
