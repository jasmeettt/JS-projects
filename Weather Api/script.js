document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  getWeatherButton.addEventListener("click", function () {
    const city = cityInput.value.trim();
    if (city === "") return;
    console.log(city);
    cityInput.value = "";
  });
});
