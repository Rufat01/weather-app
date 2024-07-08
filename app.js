const input = document.querySelector ('input')
const icon = document.querySelector ('.icon') 
const temprature = document.querySelector ('.weather-information p')
const description = document.querySelector ('.weather-description p')
const cityName = document.querySelector ('.weather-location p')
const url = 'https://api.openweathermap.org/data/2.5/'
const key = '1facd972fa04ecd0396208623adc0f9f';

input.addEventListener('keypress', (e) => {
    if (e.keyCode == '13'){
        getResult(input.value);
        input.value = '';
    }
});

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query).then(response => response.json()).then(result); 
}

const result = (result) => {
    console.log(result);
    temprature.innerText = `${Math.round(result.main.temp)}°C`;
    description.innerText = `${result.weather[0].description}`;
    cityName.innerText = `${result.name}`;
    if (result.weather[0].id == 800){ // clear
        icon.src = 'icons/clear-sky.png';
    } else if (result.weather[0].id == 801){ // few clouds
        icon.src = 'icons/clouds.png'
    } else if (result.weather[0].id == 802){ // scattered clouds
        icon.src = 'icons/scattered-clouds.jpg'
    } else if (result.weather[0].id == 803){ // broken clouds
        icon.src = 'icons/broken-clouds.jpg'
    } else if (result.weather[0].id == 804){ // overcast clouds
        icon.src = 'icons/overcast-clouds.png'
    } else if (result.weather[0].id >= 500 && result.weather[0].id <= 531){ // rain
        icon.src = 'icons/rain.jpg'
    } else if (result.weather[0].id >= 200 && result.weather[0].id <= 232) { // thunderstorm
        icon.src = 'icons/thunderstorm.jpg'
    } else if (result.weather[0].id >= 600 && result.weather[0].id <= 622) { // snow
        icon.src = 'icons/snow.jpg'
    } else if (result.weather[0].id >= 701 && result.weather[0].id <= 781 ) { // atmosphere
        icon.src = 'icons/atmosphere.jpg'
    }
}   
