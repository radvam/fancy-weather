const timeOfTheYear = {
  0: 'Winter',
  1: 'Winter',
  2: 'Spring',
  3: 'Spring',
  4: 'Spring',
  5: 'Summer',
  6: 'Summer',
  7: 'Summer',
  8: 'Autumn',
  9: 'Autumn',
  10: 'Autumn',
  11: 'Winter',
};

const timeOfDay = {
  0: 'night',
  1: 'night',
  2: 'night',
  3: 'night',
  5: 'night',
  6: 'morning',
  7: 'morning',
  8: 'morning',
  9: 'morning',
  10: 'morning',
  11: 'morning',
  12: 'day',
  13: 'day',
  14: 'day',
  15: 'day',
  16: 'day',
  17: 'day',
  18: 'evening',
  19: 'evening',
  20: 'evening',
  21: 'evening',
  22: 'evening',
  23: 'evening',
};

const daysOfWeek = {
  0: { en: 'Sun', ru: 'Вс', be: 'Нд' },
  1: { en: 'Mon', ru: 'Пн', be: 'Пн' },
  2: { en: 'Tue', ru: 'Вт', be: 'Аў' },
  3: { en: 'Wed', ru: 'Ср', be: 'Ср' },
  4: { en: 'Thu', ru: 'Чт', be: 'Чц' },
  5: { en: 'Fri', ru: 'Пт', be: 'Пт' },
  6: { en: 'Sat', ru: 'Сб', be: 'Сб' },
};

const daysOfWeekFull = {
  0: { en: 'Sunday', ru: 'Воскресенье', be: 'Нядзеля' },
  1: { en: 'Monday', ru: 'Понедельник', be: 'Панядзелак' },
  2: { en: 'Tuesday', ru: 'Вторник', be: 'Аўторак' },
  3: { en: 'Wednesday', ru: 'Среда', be: 'Серада' },
  4: { en: 'Thursday', ru: 'Четверг', be: 'Чацвер' },
  5: { en: 'Friday', ru: 'Пятница', be: 'Пятніца' },
  6: { en: 'Saturday', ru: 'Суббота', be: 'Субота' },
};

const months = {
  0: { en: 'January', ru: 'Января', be: 'Студзеня' },
  1: { en: 'February', ru: 'Февраля', be: 'Лютага' },
  2: { en: 'March', ru: 'Марта', be: 'Сакавiка' },
  3: { en: 'April', ru: 'Апреля', be: 'Красавiка' },
  4: { en: 'May', ru: 'Мая', be: 'Мая' },
  5: { en: 'June', ru: 'Июня', be: 'Червеня' },
  6: { en: 'July', ru: 'Июля', be: 'Лiпеня' },
  7: { en: 'August', ru: 'Августа', be: 'Жнiўня' },
  8: { en: 'September', ru: 'Сентября', be: 'Верасня' },
  9: { en: 'October', ru: 'Октября', be: 'Кастрычнiка' },
  10: { en: 'November', ru: 'Ноября', be: 'Лiстапада' },
  11: { en: 'December', ru: 'Декабря', be: 'Снежня' },
};

class CurrentDate {
  constructor(lang) {
    this.lang = lang;
  }

  getCurrentDate() {
    const date = new Date();
    this.day = date.getDay();
    this.month = date.getMonth();
    this.hours = date.getHours();
    const dayOfWeek = daysOfWeek[date.getDay()][this.lang];
    const dayOfDate = date.getDate();
    const month = months[date.getMonth()][this.lang];
    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;
    let mins = date.getMinutes();
    if (mins < 10) mins = `0${mins}`;
    let secs = date.getSeconds();
    if (secs < 10) secs = `0${secs}`;
    this.resultDate = `${dayOfWeek} ${dayOfDate} ${month}  ${hours}:${mins}:${secs}`;
    return this.resultDate;
  }

  keywordsGeneration() {
    this.timeOfTheYear = timeOfTheYear[this.month];
    this.timeOfDay = timeOfDay[this.hours];
  }

  dateEntry() {
    const blockDate = document.querySelector('.block-weather_date');
    blockDate.innerHTML = this.resultDate;

    const secondDay = document.querySelector('.second-day');
    const thirdDay = document.querySelector('.third-day');
    const fourthDay = document.querySelector('.fourth-day');

    secondDay.innerHTML = daysOfWeekFull[(this.day + 1) % 7][this.lang];
    thirdDay.innerHTML = daysOfWeekFull[(this.day + 2) % 7][this.lang];
    fourthDay.innerHTML = daysOfWeekFull[(this.day + 3) % 7][this.lang];
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.getCurrentDate();
    this.keywordsGeneration();
    this.dateEntry();
    this.timer = setInterval(() => {
      this.getCurrentDate();
      this.dateEntry();
    }, 1000);
  }
}

const langSelect = document.getElementById('change-language');
const language = localStorage.getItem('language') || 'en';
langSelect.value = language;

const newDate = new CurrentDate(language);
newDate.start();

export { timeOfTheYear, newDate, CurrentDate };
