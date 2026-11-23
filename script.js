
const url = "https://api.open-meteo.com/v1/forecast?latitude=29.95&longitude=-90.07&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph";

const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    weatherArea.textContent = "";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const temp = document.createElement("p");
    temp.className = "fs-4";
    temp.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
    weatherArea.appendChild(temp);

    const wind = document.createElement("p");
    wind.textContent = "Wind Speed: " + data.current.wind_speed_10m + " mph ";
    weatherArea.appendChild(wind);

    const time = document.createElement("p");
    time.textContent = "Reading Time: " + data.current.time + " (GMT)";
    weatherArea.appendChild(time);
}
button.addEventListener("click", getWeather);
