class searchItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
        :host {
            display: block;
            overflow: hidden;
            margin:10px 60px 10px 220px;
            background-color: #7d68b8;
            text-align: justify;
            border-radius:5px;
          }

          a{
            text-decoration:none;
          }
          
          .item-info {
            padding: 24px;
            color:white;
          }

          .item-info:hover{
            background-color:rgb(221, 221, 221);
            color:black;
          }
          
          a > .item-info > h2 {
            font-weight: bold;
          }
          
          a > .item-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
          }
          
        </style>
        <a href="https://id.wikipedia.com/wiki/${this._item.title}" target = "_blank">
        <div class="item-info">
          <h2>${this._item.title}</h2>
          <p>${this._item.snippet} . . . </p>
        </div></a>
        `;
  }
}
customElements.define('search-item', searchItem);
