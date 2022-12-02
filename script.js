let weather = {
    apikey: "b045804ab93431828b3e101e2be26dc1",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial&APPID=" +
            this.apikey +
            " "
        )
            .then((response) => response.json())
            .then((data) => {
                weather.displayWeather(data);
            });
    },
    displayWeather: function (data) {
        if (data.cod == 404) {
            alert("something went wrong");
            window.location.reload();
        }
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // console.log(temp);
        // console.log(document.querySelector(".temp").innerHTML);
        document.querySelector(".city").innerHTML =
            "Weather in " + name + " " + Math.round(((temp - 32) * 5) / 9) + "°C";
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".decription").innerHTML = description;
        document.querySelector(".humidity").innerHTML =
            "Humidity:  " + humidity + "%";
        document.querySelector(".wind").innerHTML =
            "Wind Speed:  " + speed + " Km/hr";
    },

    searchWeather: function () {
        weather.fetchWeather(document.querySelector("input").value);
    },
};

document.getElementById("btn").addEventListener("click", () => {
    weather.searchWeather();
});
