// `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ceb16806249418e1704b7dca064ec279`

let cityUserInput = document.querySelector(".container .search-box input");
// primary info
let weatherImage = document.querySelector(".weather-primary__img img");
let weatherTemperature = document.querySelector(
  ".weather-primary__container .weather-primary__temp"
);
let weatherMain = document.querySelector(
  ".weather-primary__container .weather-primary__weather"
);
let weatherDescription = document.querySelector(
  ".weather-primary__container .weather-primary__description"
);
let weatherLocation = document.querySelector(
  ".weather-primary .weather-primary__location"
);
// secondary info
let feelsLike = document.querySelector(".feels-like");
let minTemp = document.querySelector(".min-temp");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind-speed");
let maxTemp = document.querySelector(".max-temp");
let pressure = document.querySelector(".pressure");

const apiKey = "ceb16806249418e1704b7dca064ec279";

cityUserInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && cityUserInput.value != "") {
    getWeatherInfo(cityUserInput.value);
  }
});

let getWeatherInfo = (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      weatherTemperature.textContent = `${data.main.temp}\u00B0`;
      weatherImage.src = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weatherMain.textContent = data.weather[0].main;
      weatherDescription.textContent = data.weather[0].description;
      weatherLocation.textContent = `${data.name}`;
      feelsLike.textContent = `${data.main.feels_like}\u00B0`;
      minTemp.textContent = `${data.main.temp_min}\u00B0`;
      humidity.textContent = `${data.main.humidity}%`;
      windSpeed.textContent = `${data.wind.speed}mph`;
      maxTemp.textContent = `${data.main.temp_max}\u00B0`;
      pressure.textContent = `${data.main.pressure}mb`;
    });
};

getWeatherInfo("New York");
