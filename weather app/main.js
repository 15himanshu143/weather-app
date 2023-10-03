// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



function getWeather(city) {
  const APIKEY = "aca66468aa5a3942c20d71d28a3cc899"

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)

      let city = document.getElementById('city');
      city.innerHTML = (data.name)

      let temperature = document.getElementById('temp');
      temperature.innerHTML = (data.main.temp + '°C');

      let main = document.getElementById('main');
      main.innerHTML = (data.weather[0].main)

      let showHumidity = document.getElementById('humidity');
      showHumidity.innerHTML = (data.main.humidity);

      let windSpeed = document.getElementById('windspeed');
      windSpeed.innerHTML = (data.wind.speed + 'km/h')
    })
    .catch((err) => {
      console.log(err)
    })
}


getWeather("Nagpur")


function readData() {
  let city = document.getElementById('searchbar').value;
  getWeather(city)
}


