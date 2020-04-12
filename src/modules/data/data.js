const config = {
  feels: {
    ru: 'Ощущается',
    be: 'Адчуваецца',
    en: 'Feels like',
  },
  wind: {
    ru: 'Ветер',
    be: 'Вецер',
    en: 'Wind',
  },
  unitsWind: {
    ru: 'м/c',
    be: 'м/c',
    en: 'm/s',
  },
  humidity: {
    ru: 'Влажность',
    be: 'Вільготнасць',
    en: 'Humidity',
  },
  coordsLat: {
    ru: 'Широта',
    be: 'Шырата',
    en: 'Latitude',
  },
  coordsLon: {
    ru: 'Долгота',
    be: 'Даўгата',
    en: 'Longitude',
  },
  buttonSearch: {
    ru: 'Поиск',
    be: 'Пошук',
    en: 'Search',
  },
};

const weatherConfig = {
  200: {
    en: 'thunderstorm with light rain',
    ru: 'гроза с небольшим дождем',
    be: 'навальніца з невялікім дажджом',
  },
  201: {
    en: 'thunderstorm with rain',
    ru: 'гроза с дождем',
    be: 'навальніца з дажджом',
  },
  202: {
    en: 'thunderstorm with heavy rain',
    ru: 'гроза с проливным дождем',
    be: 'навальніца з праліўным дажджом',
  },
  210: {
    en: 'light thunderstorm',
    ru: 'слабая гроза',
    be: 'слабая навальніца',
  },
  211: {
    en: 'thunderstorm',
    ru: 'гроза',
    be: 'навальніца',
  },
  212: {
    en: 'heavy thunderstorm',
    ru: 'сильная гроза',
    be: 'моцная навальніца',
  },
  221: {
    en: 'ragged thunderstorm',
    ru: 'местами гроза',
    be: 'месцамі навальніца',
  },
  230: {
    en: 'thunderstorm with light drizzle',
    ru: 'гроза с легким моросящим дождем',
    be: 'навальніца, слабая імжа',
  },
  231: {
    en: 'thunderstorm with drizzle',
    ru: 'гроза с моросящим дождем',
    be: 'навальніца, імжа',
  },
  232: {
    en: 'thunderstorm with heavy drizzle',
    ru: 'гроза с сильным моросящим дождем',
    be: 'навальніца з моцнай імжой',
  },
  300: {
    en: 'light intensity drizzle',
    ru: 'лёгкий моросящий дождь',
    be: 'лёгкая імжа',
  },
  301: {
    en: 'drizzle',
    ru: 'небольшой дождь',
    be: 'невялікі дождж',
  },
  302: {
    en: 'heavy intensity drizzle',
    ru: 'сильный морось',
    be: 'моцная імжа',
  },
  310: {
    en: 'light intensity drizzle rain',
    ru: 'лёгкий моросящий дождь',
    be: 'лёгкая імжа',
  },
  311: {
    en: 'drizzle rain',
    ru: 'кратковременный дождь',
    be: 'кароткачасовы дождж',
  },
  312: {
    en: 'heavy intensity drizzle rain',
    ru: 'интенсивно моросящий дождь',
    be: 'моцная імжа',
  },
  313: {
    en: 'shower rain and drizzle',
    ru: 'дождь с моросью',
    be: 'дождж з імжой',
  },
  314: {
    en: 'heavy shower rain and drizzle',
    ru: 'сильный дождь с моросью',
    be: 'моцны дождж з імжой',
  },
  321: {
    en: 'shower drizzle',
    ru: 'ливень с моросью',
    be: 'імжа',
  },
  500: {
    en: 'light rain',
    ru: 'умеренный дождь',
    be: 'невялікі дождж',
  },
  501: {
    en: 'moderate rain',
    ru: 'небольшой дождь',
    be: 'невялікі дождж',
  },
  502: {
    en: 'heavy intensity rain',
    ru: 'проливной дождь',
    be: 'праліўны дождж',
  },
  503: {
    en: 'very heavy rain',
    ru: 'очень сильный дождь',
    be: 'вельмі моцны дождж',
  },
  504: {
    en: 'Extreme rain',
    ru: 'Ливень',
    be: 'Лівень',
  },
  511: {
    en: 'Freezing rain',
    ru: 'Град',
    be: 'Град',
  },
  520: {
    en: 'Light intensity shower rain',
    ru: 'Умеренный дождь',
    be: 'Невялікі лівень',
  },
  521: {
    en: 'Shower rain',
    ru: 'Ливневый дождь',
    be: 'Ліўневы дождж',
  },
  522: {
    en: 'Heavy intensity shower rain',
    ru: 'Сильный ливень',
    be: 'Моцны лівень',
  },
  531: {
    en: 'Ragged shower rain',
    ru: 'Кратковременный ливень',
    be: 'Кароткачасовы лівень',
  },
  600: {
    en: 'light snow',
    ru: 'Небольшой снег',
    be: 'Невялікі снег',
  },
  601: {
    en: 'Snow',
    ru: 'Снег',
    be: 'Снег',
  },
  602: {
    en: 'Heavy snow',
    ru: 'Снегопад',
    be: 'Снегапад',
  },
  611: {
    en: 'Sleet',
    ru: 'Мокрый снег',
    be: 'Мокры снег',
  },
  612: {
    en: 'Light shower sleet',
    ru: 'Небольшой мокрый снег',
    be: 'Мевялікі мокры снег',
  },
  613: {
    en: 'Shower sleet',
    ru: 'Мокрой снег',
    be: 'Мокры снег',
  },
  615: {
    en: 'Light rain and snow',
    ru: 'Легкий дождь со снегом',
    be: 'Лёгкі дождж са снегам',
  },
  616: {
    en: 'Rain and snow',
    ru: 'Дождь с снегом',
    be: 'Дождж з снегам ',
  },
  620: {
    en: 'Light shower snow',
    ru: 'Легкий снегопад',
    be: 'Лёгкі снегапад',
  },
  621: {
    en: 'Shower snow',
    ru: 'Снегопад',
    be: 'Снегапад',
  },
  622: {
    en: 'Heavy shower snow',
    ru: 'Сильный снегопад',
    be: 'Моцны снегапад',
  },
  701: {
    en: 'mist',
    ru: 'туман',
    be: 'туман',
  },
  711: {
    en: 'Smoke',
    ru: 'Смог',
    be: 'Змог',
  },
  721: {
    en: 'Haze',
    ru: 'Мгла',
    be: 'Імгла',
  },
  731: {
    en: 'sand/ dust whirls',
    ru: 'песчаная буря',
    be: 'пясчаная бура',
  },
  741: {
    en: 'fog',
    ru: 'туман',
    be: 'туман',
  },
  751: {
    en: 'sand',
    ru: 'Ветер с песком',
    be: 'Вецер с пяском',
  },
  761: {
    en: 'dust',
    ru: 'пыльно',
    be: 'пыльна',
  },
  762: {
    en: 'volcanic ash',
    ru: 'вулканический пепел',
    be: 'вулканічны попел',
  },
  771: {
    en: 'squalls',
    ru: 'шквалы',
    be: 'шквалы',
  },
  781: {
    en: 'tornado',
    ru: 'Cмерч',
    be: 'Смерч',
  },
  800: {
    en: 'clear sky',
    ru: 'чистое небо',
    be: 'чыстае неба',
  },
  801: {
    en: 'few clouds',
    ru: 'небольшая облачность',
    be: 'невялікая воблачнасць',
  },
  802: {
    en: 'scattered clouds',
    ru: 'переменная облачнасть',
    be: 'пераменная воблачнасць',
  },
  803: {
    en: 'broken clouds',
    ru: 'переменная облачнасть',
    be: 'пераменная воблачнасць',
  },
  804: {
    en: 'overcast clouds',
    ru: 'пасмурно',
    be: 'пахмурна',
  },
};

export { config, weatherConfig };
