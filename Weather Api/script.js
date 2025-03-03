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
    if (!city) return;

    // Fetch weather data and handle the response or error
    getWeather(city).then(displayWeather).catch(showError);

    cityInput.value = "";
  });

  function getWeather(city) {
    // Fetch weather data from the API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    return fetch(url) // Return the fetch promise
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      });
  }

  function displayWeather(weatherData) {
    // Display the weather data
    cityName.textContent = `${weatherData.name}`;
    temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
    description.textContent = `Description: ${weatherData.weather[0].description}`;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    // Show an error message
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
