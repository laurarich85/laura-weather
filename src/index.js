//Date Challenge
let currentDate = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let day = days[currentDate.getDay()];
let dateNumber = currentDate.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[currentDate.getMonth()];
let year = currentDate.getFullYear();
let hour = currentDate.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minute = currentDate.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let formatDate = `${day} ${month} ${dateNumber} ${year} ${hour}:${minute}`;
let date = document.querySelector("#date");
date.innerHTML = `${formatDate}`;

//Search Challenge

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "0694dc9ddf30c85dedc282e5ce86e825";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function searchCity(city) {
  let apiKey = "0694dc9ddf30c85dedc282e5ce86e825";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  searchCity(city);
}
let form = document.querySelector("form");
form.addEventListener("submit", submit);

function searchMyLocation(position) {
  let apiKey = "0694dc9ddf30c85dedc282e5ce86e825";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function getCurrent(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchMyLocation);
}

let currButton = document.querySelector("#current-button");
currButton.addEventListener("click", getCurrent);

//Units Challenge
function showFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = 100;
}
function showCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = 70;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);
