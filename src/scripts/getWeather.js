function getWeather() {
    var weatherData = {
        currentTemp: 0,
        feelsLikeTemp: 0,
        humidity: 0,
        // Expample: 'Clouds'
        condition: '',
        description: '',
        windSpeed: 0,
        icon: '',
        sunriseTime: 0,
        sunsetTime: 0,
    }

    function getSunriseAndSunSet(srTime, ssTime) {
        let sunriseTime = new Date((srTime)*1000).toLocaleTimeString();
        let sunsetTime = new Date((ssTime)*1000).toLocaleTimeString();
        return {
            sunriseTime,
            sunsetTime
        }
    }

    var promise = new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Fort Myers,US&lat=43.171661&lon=-81.490860&appid=2a2722df59cf85a3619e6626f9f2d980&units=imperial`, {
            headers: {
                method: "GET",
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            }
        }).then(res => res.json())
        .then(data => {
            console.log('Successfully fetched weather data.');
            weatherData = {
                currentTemp: data.main.temp,
                feelsLikeTemp: data.main.feels_like,
                humidity: data.main.humidity,
                // Expample: 'Clouds'
                condition: data.weather[0].main,
                description: data.weather[0].description,
                windSpeed: data.wind.speed,
                icon: data.weather[0].icon,
                sunriseTime: getSunriseAndSunSet(data.sys.sunrise, data.sys.sunset).sunriseTime,
                sunsetTime: getSunriseAndSunSet(data.sys.sunrise, data.sys.sunset).sunsetTime,
            }
            resolve(weatherData);
        })
        .catch(err => reject(err));
    })

    return promise;
}

module.exports = getWeather;