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
    console.log(city);

    // it may throw an error
    // sever/database is always in different states

    try {
      const weatherData = await getWeather(city);
      displayWeather(weather);
    } catch (error) {
      // showError();
    }

    cityInput.value = "";
  });

  async function getWeather(city) {
    // gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(response);
    console.log(typeof response);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    console.log(data);
    return data;
  }

  function displayWeather(weather) {
    // diplays the data
    
  }

  function showError() {
    // shows an error message
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
