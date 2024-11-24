import React from 'react'
import './App.css'
import ItemComponent from './components/ItemComponent.jsx'
import CubeItem from './components/CubeItem.jsx'
import downloadImage from './assets/img/download.png'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='text-header'>
          <div className='codex-cube'>
            <img src={downloadImage} alt="Download" />
          </div>
          <ItemComponent />
          <h1>The most accurate</h1>
          <h1>and reliable API for</h1>
          <h1>blockchain data</h1>
        </div>
        <h2>Real-time, enriched blockchain data for 6</h2>
        <h2>million+ tokens & 1 billion NFTs on 57 networks</h2>
        <div className='button-container'>
          <button className="button-1 bottone">
            <div className="button-content">
              <div className="spinner"></div>
              <div>Get Started</div>
            </div>
          </button>
          <button className="button-2 bottone">
            Scroll to Discover
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
