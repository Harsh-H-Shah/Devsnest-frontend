export const undateCity = (cityName) => {
  return {
    type: 'UPDATE_CITY',
    payload: cityName,
  };
};

export const updateWeather = () => {
  return {
    type: 'UPDATE_WEATHER',
    payload: "data",
  };
};
