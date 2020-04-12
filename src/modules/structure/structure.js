document.body.insertAdjacentHTML(
  'afterbegin',
  `
<div class="wrapper">
  <header>
    <div class="control-panel">
        <div class="flex">
          <div class="button-change-background" id="button-change-background"></div>
          <form action="#" class="change-language">
              <select name="" id="change-language">
                <option class="en" value="en">en</option>
                <option class="ru" value="ru">ru</option>
                <option class="be" value="be">be</option>
              </select>
          </form>
        </div>  
        <div class="buttons-change-temperature-units">
            <div class="button-imperial">&ordm; f</div>
            <div class="button-metric">&ordm; c</div>
        </div>           
    </div>
    <form action="#" class="form-search">
      <button class="voice-search"></button>     
      <input type="search" id="data-search-city" placeholder="Search city or ZIP" />
      <input type="submit" id="search-city" value=""/>
    </form>  
  </header>
  <main class="block-geodata">
    <section class="block-weather">
        <div>
          <h1 class="block-weather_title"></h1>
          <p class="block-weather_date"></p>
        </div>
        <div class="block-weather_icon-temp"></div>
        <div class="current-weather">
          <div class="current-weather_temp">
            <span class="value"></span>
            <span class="degrees">&#176;</span>
          </div>
          <div class="current-weather_info">
            <p class="info_clouds"></p>
            <p class="info_feelsLike">
              <span class="feelsLike_title">feels like: </span>
              <span class="feelsLike_value"></span>
              <span class="degrees">&#176;</span>
            </p>
            <p class="info_wind">
              <span class="wind_title"></span>
              <span class="wind_value"></span>
              <span class="wind_units"></span>
            </p>
            <p class="info_humidityAir">
              <span class="humidityAir_title"></span>
              <span class="humidityAir_value"></span>
              <span class="humidityAir_units">%</span>
            </p>
          </div>
        </div>
        <div class="three-days-weather">
          <div class="three-days-weather_item">
            <p class="three-days-weather_day second-day"></p>
            <p class="three-days-weather_info">
              <span class="second-temp"></span>
              <span class="second-degrees">&#176;</span>
              <span class="second-icon"></span>
            </p>
          </div>
          <div class="three-days-weather_item">
            <p class="three-days-weather_day third-day"></p>
            <p class="three-days-weather_info">
              <span class="third-temp"></span>
              <span class="third-degrees">&#176;</span>
              <span class="third-icon"></span>
            </p>
          </div>
          <div class="three-days-weather_item">
            <p class="three-days-weather_day fourth-day"></p>
            <p class="three-days-weather_info">
              <span class="fourth-temp"></span>
              <span class="fourth-degrees">&#176;</span>
              <span class="fourth-icon"></span>
            </p>
          </div>
        </div>
    </section>
    <section class="block-geolocation">
      <div id="map" class="block-geolocation_map"></div>
      <div class="block-geolocation_coordinates coordinates">
        <p class="coordinates_latitude">
          <span class="coordinates_latitude-title"></span>
          <span class="coordinates_latitude-value"></span>
        </p>
        <p class="coordinates_longitude">
          <span class="coordinates_longitude-title"></span>
          <span class="coordinates_longitude-value"></span>
        </p>
      </div>
    </section>
  </main>
  
</div>
`,
);
/* <div class="block-control">
  <section class="block-control_left">
    <button class="block-control_background-change control-item" type="button"></button>
    <select class="block-control_language-select control-item" size="1">
      <option selected value="en">EN</option>
      <option value="ru">RU</option>
      <option value="be">BE</option>
    </select>
    <div class="buttons-change-temperature-units">
        <div class="button-fahrenheit">&ordm; f</div>
        <div class="button-celsius">&ordm; c</div>
    </div>
  </section>
  <section class="block-control_right">
    <div class="input-voice"></div>
    <input id="input" class="block-control_input-text" type="text" placeholder="Search city or Zip">
    <button class="block-control_search" type="button">SEARCH</button>
  </section>
</div> */
