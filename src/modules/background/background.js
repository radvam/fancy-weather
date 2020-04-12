import { newDate } from '../block_weather/date.js';

class Background {
  constructor(elementForBackground) {
    this.elementForBackground = elementForBackground;
  }

  setImageBackground() {
    const block = document.querySelector(this.elementForBackground);
    const background = `background: url('${this.link}') center center / cover no-repeat fixed`;
    block.setAttribute('style', background);
  }

  async getLinkToImage(keywords) {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${keywords}&client_id=`;
    const AccessKey = '4af9e7339199011d21281557db2b4bbdb2034c13db8ce555f3ef2f382b929832';
    const fullUrl = url + AccessKey;
    const response = await fetch(fullUrl);
    const data = await response.json();
    this.link = await data.urls.regular;
    return this.link;
  }

  async startLoad(words) {
    const result = await this.getLinkToImage(words);
    this.setImageBackground(result);
  }
}

const background = new Background('body');

const reloadImageBg = document.querySelector('.button-change-background');
reloadImageBg.addEventListener('click', () => {
  const keyWords = `${newDate.timeOfTheYear},${newDate.timeOfDay}`;
  background.startLoad(keyWords);
});

export { background };
