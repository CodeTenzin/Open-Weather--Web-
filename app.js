// `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ceb16806249418e1704b7dca064ec279`

let cityUserInput = document.querySelector(".container .search-box input");
let weatherInfoContainer = document.querySelector(".container .weather-info");
let weatherImage = document.querySelector(".container .weather-info__img img");
let weatherTemperature = document.querySelector(
  ".container .weather-info__container .weather-info__temp"
);
let weatherMain = document.querySelector(
  ".container .weather-info__container .weather-info__weather"
);
let weatherDescription = document.querySelector(
  ".container .weather-info__container .weather-info__description"
);
let weatherLocation = document.querySelector(
  ".container .weather-info .weather-info__location"
);
// secondary info
let otherWeatherInfo = document.querySelector(
  ".container .weather-info-secondary"
);

const apiKey = "ceb16806249418e1704b7dca064ec279";

cityUserInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && cityUserInput.value != "") {
    getWeatherInfo(cityUserInput.value);
  }
});

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ceb16806249418e1704b7dca064ec279`

let getWeatherInfo = (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      weatherImage.src = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weatherMain.innerHTML = data.weather[0].main;
      weatherDescription.innerHTML = data.weather[0].description;
      weatherLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;
      weatherTemperature.innerHTML = `${data.main.temp}&#176;`;
      otherWeatherInfo.innerHTML = `<div class="wind-speed"><span>Feels like</span><p>${data.main.feels_like}&#176;</p></div>
      <div class="min-temp"><span>Min Temp</span><p>${data.main.temp_min}&#176;</p></div>
      
      <div class="humidity"><span>Humidity</span><p>${data.main.humidity}%</p></div>
      
      <div class="wind-speed"><span>Wind Speed</span><p>${data.wind.speed}mph</p></div>
      
      <div class="max-temp"><span>Max Temp</span><p>${data.main.temp_max}&#176;</p></div>
      
      <div class="pressure"><span>Pressure</span><p>${data.main.pressure}mbar</p></div>`;
    });
};

getWeatherInfo("New York");
