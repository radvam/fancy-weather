import { map } from './map.js';
import { Weather } from '../block_weather/weather.js';
import { newDate } from '../block_weather/date.js';
import { background } from '../background/background.js';
import { config } from '../data/data.js';

const input = document.getElementById('data-search-city');

export class Geocoding {
  async getGeoCoordinatesByName(nameCity = 'Minsk', lang) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${nameCity}&key=cdcc71e4e5704ddc8a5d727ad9fc4777&language=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    this.geoCoordinates = data.results[0].geometry;
  }

  getLatLng() {
    this.latitude = this.geoCoordinates.lat;
    this.longitude = this.geoCoordinates.lng;
  }

  get getLatitude() {
    return this.latitude;
  }

  async getNameByGeoCoordinates(latitude, longitude, lang) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=cdcc71e4e5704ddc8a5d727ad9fc4777&language=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    const form = data.results[0].components;
    if (form.village) {
      this.nameCity = form.village;
    } else if (form.hamlet) {
      this.nameCity = form.hamlet;
    } else {
      this.nameCity = form.city || form.town || form.county || form.state;
    }
    this.nameCountry = form.country;
  }

  entryNameCityAndCountryToInner() {
    const title = document.querySelector('.block-weather_title');
    title.innerHTML = `${this.nameCity}, ${this.nameCountry}`;
  }

  entryGeoCoordinatesToInner() {
    const lang = localStorage.getItem('language');
    const latDegrees = Math.floor(this.latitude);
    const lngDegrees = Math.floor(this.longitude);
    const latMin = Math.round((this.latitude - latDegrees) * 60);
    const lngMin = Math.round((this.longitude - lngDegrees) * 60);
    const latTitle = document.querySelector('.coordinates_latitude-title');
    const latValue = document.querySelector('.coordinates_latitude-value');
    const lonTitle = document.querySelector('.coordinates_longitude-title');
    const lonValue = document.querySelector('.coordinates_longitude-value');
    latTitle.innerHTML = `${config.coordsLat[lang]}`;
    latValue.innerHTML = `: ${latDegrees}&#176;${latMin}&#39;`;
    lonTitle.innerHTML = `${config.coordsLon[lang]}`;
    lonValue.innerHTML = `: ${lngDegrees}&#176;${lngMin}&#39;`;
  }

  async startSearch() {
    await this.getGeoCoordinatesByName(input.value, 'be');
    this.getLatLng();

    const lang = localStorage.getItem('language');
    await this.getNameByGeoCoordinates(this.latitude, this.longitude, lang);
    this.entryNameCityAndCountryToInner();
    map.flyTo({
      center: [this.longitude, this.latitude],
      essential: true,
    });
    this.entryGeoCoordinatesToInner();
  }
}

const geocoding = new Geocoding();

const searchCity = document.getElementById('search-city');

searchCity.addEventListener('click', async () => {
  if (input.value) {
    await geocoding.startSearch();

    const units = localStorage.getItem('temperatureUnits') || 'metric';
    const weatherCity = new Weather(geocoding.latitude, geocoding.longitude, units);
    await weatherCity.start();
    Weather.setIconBackground(weatherCity.getWeather, weatherCity.getWeatherNext);

    const keyWords = `${geocoding.nameCountry},${newDate.timeOfTheYear},${newDate.timeOfDay},${weatherCity.getWeather.main}`;
    background.startLoad(keyWords);
  }
});

input.addEventListener('keydown', event => {
  if (event.keyCode === 13) searchCity.click();
});

async function getCityFromVoice() {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.start();

  recognition.addEventListener('result', e => {
    if (e.results[0].isFinal) {
      const city = e.results[0][0].transcript;
      document.getElementById('data-search-city').value = city;
      searchCity.click();
    }
  });
}
const voice = document.querySelector('.voice-search');
voice.addEventListener('click', () => {
  voice.classList.add('voice-search__animation');
  getCityFromVoice();
  setTimeout(() => {
    voice.classList.remove('voice-search__animation');
  }, 7000);
});

export { input, geocoding };
