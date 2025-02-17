document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "86dbb68250fde86dc66cb4ce2077e560";

  getWeatherButton.addEventListener("click", async function () {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // sever/database is always in different states
    try {
      const weatherData = await getWeather(city);
      displayWeather(weatherData);
    } catch (error) {
      showError();
    }
    cityInput.value = "";
  });

  async function getWeather(city) {
    // gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeather(weatherData) {
    // diplays the data
    cityName.textContent = `${weatherData.name}`;
    temperature.textContent = `Temprature: ${weatherData.main.temp}°C`;
    description.textContent = `Description: ${weatherData.weather[0].description}`;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    // shows an error message
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
