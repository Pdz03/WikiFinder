class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
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
        :host{
            color:white;
            flex:5;
            display:flex;
            flex-direction: column;
        }
            p > a{
            text-decoration: none;
            color:#e9e1ff;
          }
            p > a:hover{
            font-weight:bold;
          }
          h1{
            font-size:70px;
          }
          p{
            font-size:20px;
          }
          </style>
          <h1>Wiki Finder</h1>
          <p>
            Temukan yang Kamu Cari, website pencari informasi yang terintregasi
            dengan
            <a href="https://id.wikipedia.org" target="_blank"
              >Wikipedia Indonesia</a
            >
          </p>
          `;
  }
}

customElements.define('app-bar', AppBar);
