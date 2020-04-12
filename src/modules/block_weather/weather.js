import { config, weatherConfig } from '../data/data.js';

class Weather {
  constructor(lat, lon, units) {
    this.lat = lat;
    this.lon = lon;
    this.units = units;
  }

  get getWeather() {
    return this.weather;
  }

  get getWeatherNext() {
    return this.weatherNext;
  }

  async getCurrentWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&lang=en&units=${this.units}&APPID=5d59613b8dbcb5e378237e72882e0500`;
    const response = await fetch(url);
    const data = await response.json();
    this.currentData = data;
    this.weather = this.currentData.weather['0'];
  }

  async getFiveDaysWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&lang=en&units=${this.units}&APPID=5d59613b8dbcb5e378237e72882e0500`;
    const response = await fetch(url);
    const data = await response.json();
    this.fiveDaysWeather = data.list;
  }

  getAverageTemperature() {
    const arr = Object.entries(this.fiveDaysWeather);
    this.weatherNext = {};
    let secondDayAverage = 0;
    let thirdDayAverage = 0;
    let fourthDayAverage = 0;

    arr.forEach((item, i) => {
      if (i >= 8 && i <= 15) {
        secondDayAverage += item['1'].main.temp;
        if (i === 8) {
          this.weatherNext.secondIcon = item['1'].weather['0'];
        }
      }
      if (i >= 16 && i <= 23) {
        thirdDayAverage += item['1'].main.temp;
        if (i === 16) {
          this.weatherNext.thirdIcon = item['1'].weather['0'];
        }
      }
      if (i >= 24 && i <= 31) {
        fourthDayAverage += item['1'].main.temp;
        if (i === 24) {
          this.weatherNext.fourthIcon = item['1'].weather['0'];
        }
      }
    });

    this.secondTempAverage = Math.round(secondDayAverage / 8);
    this.thirdTempAverage = Math.round(thirdDayAverage / 8);
    this.fourthTempAverage = Math.round(fourthDayAverage / 8);
  }

  static setIconBackground(weather, weatherNext) {
    const url = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    const icon = document.querySelector('.block-weather_icon-temp');
    const background = `background: url('${url}') center right / contain no-repeat`;
    icon.setAttribute('style', background);

    const urlSecond = `http://openweathermap.org/img/wn/${weatherNext.secondIcon.icon}@2x.png`;
    const urlThird = `http://openweathermap.org/img/wn/${weatherNext.thirdIcon.icon}@2x.png`;
    const urlFourth = `http://openweathermap.org/img/wn/${weatherNext.fourthIcon.icon}@2x.png`;
    const iconSecond = document.querySelector('.second-icon');
    const iconThird = document.querySelector('.third-icon');
    const iconFourth = document.querySelector('.fourth-icon');
    iconSecond.setAttribute(
      'style',
      `background: url('${urlSecond}') center center / contain no-repeat`,
    );
    iconThird.setAttribute(
      'style',
      `background: url('${urlThird}') center center / contain no-repeat`,
    );
    iconFourth.setAttribute(
      'style',
      `background: url('${urlFourth}') center center / contain no-repeat`,
    );
  }

  dataEntry() {
    const lang = localStorage.getItem('language') || 'en';
    const temp = document.querySelector('.value');
    const clouds = document.querySelector('.info_clouds');

    const feelsLikeTitle = document.querySelector('.feelsLike_title');
    const feelsLikeValue = document.querySelector('.feelsLike_value');
    const windTitle = document.querySelector('.wind_title');
    const windValue = document.querySelector('.wind_value');
    const windUnits = document.querySelector('.wind_units');
    const humidityAirTitle = document.querySelector('.humidityAir_title');
    const humidityAirValue = document.querySelector('.humidityAir_value');

    const secondTemp = document.querySelector('.second-temp');
    const thirdTemp = document.querySelector('.third-temp');
    const fourthTemp = document.querySelector('.fourth-temp');

    temp.innerHTML = Math.round(this.currentData.main.temp);

    const valueClouds = `${weatherConfig[this.weather.id][lang]}`;
    const valueFeelsLike = Math.round(this.currentData.main.feels_like);

    const units = localStorage.getItem('temperatureUnits') || 'metric';
    let valueWind;
    if (units === 'imperial') {
      valueWind = Math.round((this.currentData.wind.speed * 1.609) / 3.6);
    } else {
      valueWind = Math.round(this.currentData.wind.speed);
    }
    const valueHumidityAir = this.currentData.main.humidity;

    clouds.innerHTML = `${valueClouds}`;
    feelsLikeTitle.innerHTML = `${config.feels[lang]}:`;
    feelsLikeValue.innerHTML = `${valueFeelsLike}`;
    windTitle.innerHTML = `${config.wind[lang]}:`;
    windValue.innerHTML = `${valueWind}`;
    windUnits.innerHTML = `${config.unitsWind[lang]}`;
    humidityAirTitle.innerHTML = `${config.humidity[lang]}:`;
    humidityAirValue.innerHTML = `${valueHumidityAir}`;

    secondTemp.innerHTML = `${this.secondTempAverage}`;
    thirdTemp.innerHTML = `${this.thirdTempAverage}`;
    fourthTemp.innerHTML = `${this.fourthTempAverage}`;
  }

  async start() {
    await this.getCurrentWeather();
    await this.getFiveDaysWeather();
    this.getAverageTemperature();
    this.dataEntry();
  }
}

export { Weather };
