console.log("Welcome to the console of Weather App");

const apiKey = "345596a084ec50a0b88689e272ca00bb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let weatherImg = document.getElementById('weatherImg');
let temp = document.getElementById('temp');
let cityName = document.getElementById('cityName')
let humidity = document.getElementById('humidity')
let windSpeed = document.getElementById('windSpeed')
let inputBox = document.getElementsByClassName('inputBox')[0];

async function checkWeather()
{
    console.log(inputBox.value);
    let city = inputBox.value;
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    console.log(data.main.humidity);
    console.log(data.name);
    cityName.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + " ºC";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds")
    {
        weatherImg.src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Clear")
    {
        weatherImg.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Drizzle")
    {
        weatherImg.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist")
    {
        weatherImg.src = "images/mist.png";
    }
    else if(data.weather[0].main === "Rain")
    {
        weatherImg.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Snow")
    {
        weatherImg.src = "images/snow.png";
    }
    else if(data.weather[0].main === "Haze")
    {
        weatherImg.src = "images/haze.png";
    }
    document.querySelector('.containerBody').style.display = "block";

}