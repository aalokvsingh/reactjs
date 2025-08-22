const baseUrl = 'https://api.weatherapi.com/v1/current.json';
const apiKey  = 'be8881760c2e466d97e42402252208'

export const getWeatherDataForCity = async (city) => {
  try {
    
    const response = await fetch(`${baseUrl}?key=${apiKey}&q=${city}&aqi=yes`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}


export const getWeatherDataForLatLong = async (lat,long) => {
  try {
    
    const response = await fetch(`${baseUrl}?key=${apiKey}&q=${lat,long}&aqi=yes`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}