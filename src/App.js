import './App.css';
import React from 'react'
import  { WeatherProvider } from './context/WeatherContext'
import Weather from './components/Weather'
import CityDropdown  from './components/CityDropdown'

function App() {
  return (
    <div className="App">
      <WeatherProvider>
  
        <CityDropdown />
        <Weather />

      </WeatherProvider>
    </div>
  );
}

export default App;
