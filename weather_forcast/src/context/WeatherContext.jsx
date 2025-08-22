import {createContext,useContext, useState} from "react";
import {getWeatherDataForCity,getWeatherDataForLatLong} from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
    
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
        
        console.log('fetch data for city', searchCity);
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    }
    const getUserCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                getWeatherDataForLatLong(lat,long).then((response)=>{setData(response)})
            })
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }


    return (
        <WeatherContext.Provider value={{ searchCity,data, setData, setSearchCity,fetchData,getUserCurrentLocation }}>
            {props.children}
        </WeatherContext.Provider>
    );
}