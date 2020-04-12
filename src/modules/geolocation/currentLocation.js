import { map } from './map.js';
import { Geocoding } from './geocoding.js';
import { Weather } from '../block_weather/weather.js';
import { newDate } from '../block_weather/date.js';
import { background } from '../background/background.js';
import { config } from '../data/data.js';

class CurrentLocation {
  get getCoords() {
    return this.coords;
  }

  async getCurrentUserLocation() {
    const queryApi = `https://ipinfo.io/json?`;
    const accessKey = `token=17420125df3b6b`;
    const url = queryApi + accessKey;
    const res = await fetch(url);
    const data = await res.json();
    const array = data.loc.split(',');
    const coords = {
      latitude: array[0],
      Longitude: array[1],
    };
    this.coords = coords;
  }

  mapRendering() {
    map.flyTo({
      center: [this.coords.Longitude, this.coords.latitude],
      essential: true,
    });
  }

  async getDataWeather() {
    const units = localStorage.getItem('temperatureUnits') || 'metric';
    const weather = new Weather(this.coords.latitude, this.coords.Longitude, units);
    await weather.start();
    Weather.setIconBackground(weather.getWeather, weather.getWeatherNext);
  }

  entryCoords() {
    const lang = localStorage.getItem('language') || 'en';
    const latDegrees = Math.floor(this.coords.latitude);
    const lngDegrees = Math.floor(this.coords.Longitude);
    const latMin = Math.round((this.coords.latitude - latDegrees) * 60);
    const lngMin = Math.round((this.coords.Longitude - lngDegrees) * 60);
    const latTitle = document.querySelector('.coordinates_latitude-title');
    const latValue = document.querySelector('.coordinates_latitude-value');
    const lonTitle = document.querySelector('.coordinates_longitude-title');
    const lonValue = document.querySelector('.coordinates_longitude-value');
    latTitle.innerHTML = `${config.coordsLat[lang]}`;
    latValue.innerHTML = `: ${latDegrees}&#176;${latMin}&#39;`;
    lonTitle.innerHTML = `${config.coordsLon[lang]}`;
    lonValue.innerHTML = `: ${lngDegrees}&#176;${lngMin}&#39;`;
  }

  entryButtonSearch() {
    const lang = localStorage.getItem('language') || 'en';
    const buttonSearch = document.getElementById('search-city');
    buttonSearch.value = config.buttonSearch[lang];
  }

  async getCityByCoords() {
    const lang = localStorage.getItem('language') || 'en';
    const currentGeo = new Geocoding();
    await currentGeo.getNameByGeoCoordinates(this.coords.latitude, this.coords.Longitude, lang);
    currentGeo.entryNameCityAndCountryToInner();
  }

  loadingBackground() {
    const keyWords = `${newDate.timeOfTheYear},${newDate.timeOfDay}`;
    background.startLoad(keyWords);
  }

  async start() {
    await this.getCurrentUserLocation();
    this.mapRendering();
    this.getDataWeather();
    this.entryCoords();
    this.entryButtonSearch();
    this.getCityByCoords();
    this.loadingBackground();
  }
}

const currentLocation = new CurrentLocation();
currentLocation.start();

export { currentLocation };
