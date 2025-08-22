import logo from './logo.svg';
import { useEffect } from 'react';

import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { useWeather } from './context/WeatherContext';

function App() {
  const weather = useWeather();
  console.log('weather from app', weather);

  const handleRefresh = () => {
    window.location.reload(); // reloads the current page
  };

  useEffect(()=>{
    // console.log('weather data changed', weather.data);
    weather.getUserCurrentLocation();
  },[])

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <p>Get the latest weather updates</p>
       <Input/>
       <Button onClick={weather.fetchData} value="Search"/>
      <Card />
      <Button onClick={handleRefresh} value="Refresh"/>
      
    </div>
  );
}

export default App;
