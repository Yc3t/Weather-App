const apiKey = "API_KEY"
const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weather = document.querySelector(".weather-icon")



async function checkWeather(city) {

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

  const response = await fetch(url)

  if(response.status == 404 ){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display = "none";


  }else{
      var data = await response.json();
  document.querySelector(".city").innerHTML = data.name
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " ºc"
  document.querySelector(".humidity").innerHTML = data.main.humidity
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

  if (data.weather[0].main === "Clouds") {
    weather.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weather.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weather.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weather.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Snow") {
    weather.src = "images/snow.png";
  } else if (data.weather[0].main === "Thunderstorm") {
    weather.src = "images/thunderstorm.png";
  } else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Haze") {
    weather.src = "images/mist.png";
  } else {
    weather.src = "images/clear.png"; // Default image for other conditions
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display="none";

  }

}




searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value)
})
