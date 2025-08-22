import React from "react";
import { useWeather } from "../context/WeatherContext";

const Card = ({ weatherData }) => {
//   const { main, weather, wind } = weatherData;
    const weather = useWeather();
    console.log('weather from card', weather);
  return (
    <div className="card">
        <img src={weather.data?.current?.condition.icon}/>
      <h2>Temperature: {weather.data?.current?.temp_c}</h2>
      <p>Location: {weather.data?.location.name}</p>
    </div>
  );
}

export default Card;