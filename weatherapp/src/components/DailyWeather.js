import React from 'react';
import { connect } from 'react-redux';
import "./Weather.css"; 
import moment from 'moment';

const DailyWeather = ({ weather, temperature }) => {
  const renderDaily = () => {
    return weather.map((day, index) => {
      if (index === 0) {
        return null;
      }
      return (
        <div
          key={day.dt}
          className="list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom"
        >
          <div className="col">
            <p className="mb-0">{moment.unix(day.dt).format('dddd')}</p>
          </div>
          <div className="col px-2 text-center">
            <img
              className="img-fluid weather-img"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
              alt={day.weather[0].description}
            />
          </div>
          <div className="col d-none d-md-block d-lg-block d-xl-block text-center">
            {Math.round(day.pop * 100)}%
          </div>
          <div className="col d-none d-md-block text-center">{day.humidity}%</div>
          <div className="col d-flex flex-row justify-content-end">
            <p className=" mb-0">{temperature(day.temp.max)}</p>
            <p className=" ml-2 mb-0">{temperature(day.temp.min)}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container hi">
      <div className="mb-4 list-group list-group-flush hi">
        <div className="list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom text-center day-header hi">
          <div className="col text-left d-none d-md-block d-lg-block d-xl-block hi">
            <small>DAY</small>
          </div>
          <div className="col d-none d-md-block d-lg-block d-xl-bloc text-mutedk"></div>
          <div className="col d-none d-md-block d-lg-block d-xl-block  hi">
            <small>CHANCE OF RAIN</small>
          </div>
          <div className="col d-none d-md-block d-lg-block d-xl-block hi">
            <small>HUMIDITY</small>
          </div>
          <div className="col text-right d-none d-md-block d-lg-block d-xl-block hi">
            <small>TEMPERATURE</small>
          </div>
        </div>
        {renderDaily()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather.daily };
};

export default connect(mapStateToProps)(DailyWeather);