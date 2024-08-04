function cityInputSubmit(){
    cityInputValue = document.getElementById('city').value;
    requestWeatherFor(cityInputValue);
}

function requestWeatherFor(city){
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=MLZRY2FVTUUSG8PCE962GBRFZ`, {mode: 'cors'})
    .then(function(response) {
        return(response.json());
    })
    .then(data => {
            // 'data' is now a JavaScript object
            console.log(data); // Output the whole object (for debugging)

            const temperature = data.currentConditions.temp;
            const feelslike = data.currentConditions.feelslike;
            const humidity = data.currentConditions.humidity;
            const conditions = data.currentConditions.conditions;
            const windspeed = data.currentConditions.windspeed;
            const resolvedAddress = data.resolvedAddress;
            displayWeatherInformation(temperature,feelslike,humidity,conditions,windspeed,resolvedAddress);
    })
    .catch(error => {
            console.error('Error fetching weather data:', error); // Handle errors
    });
}

function displayWeatherInformation(temperature,feelslike,humidity,conditions,windspeed,resolvedAddress){
    document.getElementById('temperature').innerText = temperature + '°F';
    document.getElementById('feelslike').innerText = 'FEELS LIKE ' + feelslike + '°F';
    document.getElementById('humidity').innerText = 'HUMIDITY: ' + humidity + '%';
    document.getElementById('conditions').innerText = conditions + ' in';
    document.getElementById('windspeed').innerText = 'WIND: ' + windspeed  + 'km/h';
    document.getElementById('resolvedAddress').innerText = resolvedAddress;
}


submitButton = document.getElementById('submit');
submitButton.addEventListener('click', cityInputSubmit);