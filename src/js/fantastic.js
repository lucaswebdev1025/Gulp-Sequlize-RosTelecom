const lazyloadInstance = require('./common/LazyLoad')(),
      { setDefaults } = require('./common')



document.addEventListener('DOMContentLoaded', () => {

setDefaults();

	
  
const tab = document.querySelector('.step__tabs');
const list = document.querySelector('.step__content');


class TabList {
  constructor(tab, list) {
    this.tab = tab;
    this.list = list;
    
    this.tab.addEventListener('click', event => {
      for (let sibling of event.target.parentNode.children) {
        sibling.classList.remove('active');
      }
      event.target.closest('.step__tab').classList.add('active');
      const index = event.target.closest('.step__tab').dataset.value;
      
      this.openTab(index);
    });
  }
  
  openTab(index) {
    this.list.querySelector('.active').classList.remove('active');
    this.list.querySelector(`.step__list--${index}`).classList.add('active');
  }
}

new TabList(tab, list);

})