import '../component/item-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const itemListElement = document.querySelector('item-list');
  const footerElement = document.querySelector('footer');


  const onButtonSearchClicked = () => {
    DataSource.searchItem(searchElement.value)
    .then(renderResult)
    .catch(fallbackResult);
  };

  const renderResult = (results) => {
    itemListElement.items = results;
    if (results.length > 2) {
      footerElement.style = 'position:relative';
    } else {
      footerElement.style = 'position:fixed';
    }
  };

  const fallbackResult = (message) => {
    itemListElement.renderError(message);
    footerElement.style = 'position:fixed';
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
