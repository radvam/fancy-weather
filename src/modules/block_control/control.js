import { newDate } from '../block_weather/date.js';
import { currentLocation } from '../geolocation/currentLocation.js';
import { Geocoding, geocoding } from '../geolocation/geocoding.js';
import { Weather } from '../block_weather/weather.js';
import { config } from '../data/data.js';

const temp = document.querySelector('.value');
const feelsLike = document.querySelector('.feelsLike_value');
const secondTemp = document.querySelector('.second-temp');
const thirdTemp = document.querySelector('.third-temp');
const fourthTemp = document.querySelector('.fourth-temp');

function changeToFahrenheit() {
  const units = localStorage.getItem('temperatureUnits');
  if (units === 'metric') {
    temp.innerHTML = Math.round(temp.innerHTML * 1.8 + 32);
    feelsLike.innerHTML = Math.round(feelsLike.innerHTML * 1.8 + 32);
    secondTemp.innerHTML = Math.round(secondTemp.innerHTML * 1.8 + 32);
    thirdTemp.innerHTML = Math.round(thirdTemp.innerHTML * 1.8 + 32);
    fourthTemp.innerHTML = Math.round(fourthTemp.innerHTML * 1.8 + 32);
  }
}

function changeToCelsius() {
  const units = localStorage.getItem('temperatureUnits');
  if (units === 'imperial') {
    temp.innerHTML = Math.round((temp.innerHTML - 32) / 1.8);
    feelsLike.innerHTML = Math.round((feelsLike.innerHTML - 32) / 1.8);
    secondTemp.innerHTML = Math.round((secondTemp.innerHTML - 32) / 1.8);
    thirdTemp.innerHTML = Math.round((thirdTemp.innerHTML - 32) / 1.8);
    fourthTemp.innerHTML = Math.round((fourthTemp.innerHTML - 32) / 1.8);
  }
}

const buttonFahrenheit = document.querySelector('.button-imperial');
const buttonCelsius = document.querySelector('.button-metric');

buttonFahrenheit.addEventListener('click', () => {
  buttonFahrenheit.classList.add('active');
  buttonCelsius.classList.remove('active');
  changeToFahrenheit();
  localStorage.setItem('temperatureUnits', 'imperial');
});

buttonCelsius.addEventListener('click', () => {
  buttonFahrenheit.classList.remove('active');
  buttonCelsius.classList.add('active');
  changeToCelsius();
  localStorage.setItem('temperatureUnits', 'metric');
});

async function changeTemperatureUnits() {
  const units = localStorage.getItem('temperatureUnits') || 'metric'; // default

  const button = document.querySelector(`.button-${units}`);
  button.classList.add('active'); // change bg button
}

changeTemperatureUnits();

const switchLanguage = document.getElementById('change-language');

switchLanguage.addEventListener('change', async () => {
  const lat = geocoding.latitude || currentLocation.getCoords.latitude;
  const long = geocoding.longitude || currentLocation.getCoords.Longitude;

  if (switchLanguage.value === 'en') {
    localStorage.setItem('language', 'en');
    newDate.lang = localStorage.getItem('language');

    const units = localStorage.getItem('temperatureUnits') || 'metric';
    const weather = new Weather(lat, long, units);
    weather.start();

    const currentGeo = new Geocoding();
    await currentGeo.getNameByGeoCoordinates(lat, long, localStorage.getItem('language'));
    currentGeo.entryNameCityAndCountryToInner();

    const latTitle = document.querySelector('.coordinates_latitude-title');
    const lonTitle = document.querySelector('.coordinates_longitude-title');
    latTitle.innerHTML = `${config.coordsLat[localStorage.getItem('language')]}`;
    lonTitle.innerHTML = `${config.coordsLon[localStorage.getItem('language')]}`;

    const buttonSearch = document.getElementById('search-city');
    buttonSearch.value = config.buttonSearch[localStorage.getItem('language')];
  }
  if (switchLanguage.value === 'ru') {
    localStorage.setItem('language', 'ru');
    newDate.lang = localStorage.getItem('language');

    const units = localStorage.getItem('temperatureUnits') || 'metric';
    const weather = new Weather(lat, long, units);
    weather.start();

    const currentGeo = new Geocoding();
    await currentGeo.getNameByGeoCoordinates(lat, long, localStorage.getItem('language'));
    currentGeo.entryNameCityAndCountryToInner();

    const latTitle = document.querySelector('.coordinates_latitude-title');
    const lonTitle = document.querySelector('.coordinates_longitude-title');
    latTitle.innerHTML = `${config.coordsLat[localStorage.getItem('language')]}`;
    lonTitle.innerHTML = `${config.coordsLon[localStorage.getItem('language')]}`;

    const buttonSearch = document.getElementById('search-city');
    buttonSearch.value = config.buttonSearch[localStorage.getItem('language')];
  }
  if (switchLanguage.value === 'be') {
    localStorage.setItem('language', 'be');
    newDate.lang = localStorage.getItem('language');

    const units = localStorage.getItem('temperatureUnits') || 'metric';
    const weather = new Weather(lat, long, units);
    weather.start();

    const currentGeo = new Geocoding();
    await currentGeo.getNameByGeoCoordinates(lat, long, localStorage.getItem('language'));
    currentGeo.entryNameCityAndCountryToInner();

    const latTitle = document.querySelector('.coordinates_latitude-title');
    const lonTitle = document.querySelector('.coordinates_longitude-title');
    latTitle.innerHTML = `${config.coordsLat[localStorage.getItem('language')]}`;
    lonTitle.innerHTML = `${config.coordsLon[localStorage.getItem('language')]}`;

    const buttonSearch = document.getElementById('search-city');
    buttonSearch.value = config.buttonSearch[localStorage.getItem('language')];
  }
});
