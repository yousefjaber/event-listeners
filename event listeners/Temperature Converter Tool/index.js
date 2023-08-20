const temperatureInput = document.getElementById("temperature");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const output = document.getElementById("output");

toCelsius.addEventListener("click", function () {
  const temperature = parseFloat(temperatureInput.value);
  const celsius = ((temperature - 32) * 5) / 9;
  output.textContent = `${temperature}°F is ${celsius.toFixed(2)}°C`;
});

toFahrenheit.addEventListener("click", function () {
  const temperature = parseFloat(temperatureInput.value);
  const fahrenheit = (temperature * 9) / 5 + 32;
  output.textContent = `${temperature}°C is ${fahrenheit.toFixed(2)}°F`;
});
