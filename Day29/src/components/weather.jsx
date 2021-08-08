import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCityName, updateCityWeather } from '../action/action';

const Weather = () => {
  const city = useSelector((state) => state.city);
  const info = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCityWeather(city));
  }, []);

  return (
    <div className="container">
      <div style={{ marginBottom: '2px' }}>
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={(e) => dispatch(updateCityName(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(updateCityWeather(city));
          }}
        >
          Check now
        </button>
      </div>

      <div className="result">
        <img src={info.icon} alt="" />
        <h1>{info.temp}°</h1>
        <h3>{info.summary}</h3>
        <h1>{info.city_name}</h1>
      </div>
      <div className="whp">
        <div className="simple">
          <h5>Wind Now</h5>
          <h2>{info.wind_speed}km</h2>
        </div>
        <div className="simple">
          <h5>Humidity</h5>
          <h2>{info.humidity}%</h2>
        </div>
        <div className="simple">
          <h5>Percipitation</h5>
          <h2>{info.precipitation}%</h2>
        </div>
      </div>
    </div>
  );
};

export default Weather;
