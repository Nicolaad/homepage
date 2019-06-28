import React from 'react';
import './App.css';
import TopBar from './components/TopBar.js';
import LandingImage from './components/LandingImage.js';
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className="App">
    <TopBar/>
    <LandingImage/>
    <BottomBar />
    </div>
  );
}

export default App;
