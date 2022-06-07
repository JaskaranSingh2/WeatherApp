cityIn.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		cityHandler();
	}
});

window.onload = () => {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=2c88e700955f6362d510e3050fc9725d"
	)
		.then((data) => data.json())
		.then((data) => {
			desc1 = data.weather[0].description;
			console.log("desc1 " + data.weather[0].description);
			console.log(data);
			desc.innerHTML = desc1;
			temp.innerHTML = Math.round(data.main.temp) + "&deg;";
			loc.innerHTML = data.name;
			humid.innerHTML = "Humidity: " + Math.round(data.main.humidity) + "%";
			wind.innerHTML = "Wind Speed: " + data.wind.speed + "km/s";
			if (desc1.indexOf("rain") != -1) {
				icon.src = "img/rainy.png";
			} else if (desc1.indexOf("cloud") != -1) {
				icon.src = "img/cloudy.png";
			} else if (desc1.indexOf("sky") != -1) {
				icon.src = "img/sunny.png";
			} else if (desc1.indexOf("snow") != -1) {
				icon.src = "img/snowy.png";
			}
		});
};

function cityHandler() {
	let cityName = cityIn.value;
	const myKey = config.key;
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			cityName +
			"&units=metric&appid=" +
			myKey
	)
		.then((data) => data.json())
		.then((data) => {
			desc1 = data.weather[0].description;
			console.log("desc1 " + data.weather[0].description);
			console.log(data);
			desc.innerHTML = desc1;
			temp.innerHTML = Math.round(data.main.temp) + "&deg;";
			loc.innerHTML = data.name;
			humid.innerHTML = "Humidity: " + Math.round(data.main.humidity) + "%";
			wind.innerHTML = "Wind Speed: " + data.wind.speed + "km/s";
			if (desc1.indexOf("rain") != -1) {
				icon.src = "img/rainy.png";
			} else if (desc1.indexOf("cloud") != -1) {
				icon.src = "img/cloudy.png";
			} else if (desc1.indexOf("sky") != -1) {
				icon.src = "img/sunny.png";
			} else if (desc1.indexOf("snow") != -1) {
				icon.src = "img/snowy.png";
			}
		});
}
