import './search-item.js';

class itemList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set items(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._items.forEach((item) => {
      const searchItemElement = document.createElement('search-item');
      searchItemElement.item = item;
      this.shadowDOM.appendChild(searchItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
      .placeholder{
        display: block;
        font-weight: lighter;
        color: rgba(255, 255, 255, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding-left:10px;
      }
      p{
        font-weight: lighter;
        color: rgba(255, 255, 255, 0.5);
        padding-left:10px;
      }
      </style>
      `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">Data tidak ditemukan, pastikan menuliskan kata kunci dengan benar!</h2>
      <p>Pesan Error : ${message}</p>
      `;
  }
}

customElements.define('item-list', itemList);
