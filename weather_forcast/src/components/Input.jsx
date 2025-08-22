import { useWeather } from "../context/WeatherContext";

const Input = () => {
    const weather = useWeather();
    console.log('weather', weather);

  return (
    
      <input className="input-container"
        type="text" 
        onChange={(e)=>weather.setSearchCity(e.target.value)} 
        value={weather.searchCity}
      />
      
    
  );
}

export default Input;