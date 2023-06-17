import { setup } from './src/search-engine.js'
import './src/style.css'

document.querySelector('body')
  .insertAdjacentHTML('afterbegin', `
    <div id="app">
      <h1>Image Search</h1>
      <form id="search-form">
        <input type="text" id="search-box" placeholder="Type query here...">
        <button>Search</button>
      </form>
    
      <div id="search-result"></div>
      <button id="show-more-btn">
        Show more
      </button>
    </div>
  `)

setup()
