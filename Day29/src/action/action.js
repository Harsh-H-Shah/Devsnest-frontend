export const updateCityName = (cityName) => {
  return {
    type: 'UPDATE_CITY_NAME',
    payload: cityName,
  };
};

const transformData = (data) => {
  return {
    icon: data.current.condition.icon,
    summary: data.current.condition.text,
    temp: data.current.temp_c,
    wind_speed: data.current.wind_kph,
    precipitation: data.current.precip_mm,
    humidity: data.current.humidity,
    city_name: data.location.name,
  };
};

export const updateCityWeather = (city) => {
  return async (dispatch) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=069074525fed489b966210527210708&`;
    const response = await fetch(`${url}q=${city}`);
    const data = await response.json();
    const info = transformData(data);
    return dispatch({type: 'UPDATE_CITY_WEATHER', payload: info})
  }  
};
