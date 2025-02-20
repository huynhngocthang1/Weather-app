const APP_ID = '0e68564b266465cd0a756b6ddaeb9778';
const DEFAULT_VALUE = '--';

const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const sunRise = document.querySelector('.sunrise');
const sunSet = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change', (e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then( async res => {
        const data = await res.json();
        console.log('[Search Input]', data);
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    });
})