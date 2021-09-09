const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "db9b442d366a41f5f62c83925e7f6102"
}

function getWeather() {
    const cityID = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityID}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.city-temp').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.feels-like').innerHTML = `Feels Like ${Math.round(data.main.feels_like)}${'&deg;'}`;
    document.querySelector('.city-description').innerHTML = data.weather[0]['description'];
    document.querySelector('.city-icon').innerHTML =
        `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;