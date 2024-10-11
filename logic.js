const apiKey = "API_KEY"
let city = "Florida"
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

async function checkWeather(){
  
  const response = await fetch(url)

  var data = await response.json();

  console.log(data)
}

checkWeather()
