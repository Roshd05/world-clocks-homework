function updateTime() {
let lisbonElement = document.querySelector("#lisbon");
if (lisbonElement) {
let lisbonDateElement = document.querySelector(".date");
let lisbontimeElement = document.querySelector(".time");
let lisbonTime = moment().tz("Europe/Lisbon");

lisbonDateElement.innerHTML = lisbonTime.format("MMMM	Do YYYY");
lisbontimeElement.innerHTML = lisbonTime.format( "h:mm:ss [<small>]A[</small>]"
);
}

function updateTime() {
let sydneyElement = document.querySelector("#sydney");
if (sydneyElement) {
let sydneyDateElement = document.querySelector(".date");
let sydneytimeElement = document.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyime.format("MMMM	Do YYYY");
sydneytimeElement.innerHTML = sydneyTimeTime.format( "h:mm:ss [<small>]A[</small>]"
);
}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="/">All Cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);