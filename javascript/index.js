function updateTime() {
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = document.querySelector(".date");
    let lisbontimeElement = document.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
    lisbontimeElement.innerHTML = lisbonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = document.querySelector(".date");
    let barcelonatimeElement = document.querySelector(".time");
    let barcelonaime = moment().tz("Europe/Barcelona");

    barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
    barcelonatimeElement.innerHTML = barcelonaTime.format(
      "h:mm:ss [<small>]A[</small>]"
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
    <a href="/">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
