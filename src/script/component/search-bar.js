class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
          * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

          .search-container {
            display: flex;
            position: sticky;
            top:0;
            max-width: 100%; 
            align-items:center;   
            padding-left:10px;      
          }

          .search-bar{
            background-color: white;
            width:80%;
            display: flex;
            padding: 5px 5px 5px 15px;
            margin:10px;
            box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2);
            border-radius: 30px;
          }
          
          .search-container > .search-bar > input {
            width: 80%;
            padding-left: 10px;
            margin:0 10px 0 10px;
            border: 0;
            border-bottom: 1px solid #03001C;
            font-weight: bold;
          }

          .search-container >  h1 {
            color:white;
          }
          
          .search-container > .search-bar > input:focus {
            outline: 0;
            border-bottom: 2px solid #03001C;
          }
          
          .search-container > .search-bar > input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-container > .search-bar > input::placeholder {
            color: gray;
            font-weight: normal;
          }
          
          .search-container > .search-bar > button {
            width: 20%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #6F1AB6;
            color: white;
            border-radius:35px;
            text-transform: uppercase;
            font-weight:bold;
            font-size:15px;
          }

          .search-container > .search-bar > button:hover{
            background-color:#3D1766;
          }
          
          @media screen and (max-width: 1200px) {

            .search-bar{
              width: 100%;
            }
          
            .search-container > .search-bar > input {
              width: 100%;
            }
          
            .search-container > .search-bar > button {
              width: 30%;
            }
          }
          </style>
          <div id="search-container" class="search-container">
          <h1>Wiki Finder</h1>  
          <div class="search-bar">
          <input placeholder="Informasi yang ingin dicari" id="searchElement" type="search" required>
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
        </form>
          `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
