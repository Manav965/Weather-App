import React from 'react';
import { connect } from 'react-redux';
import "./Weather.css";
import moment from 'moment';
import { windDegreeToText } from '../helpers';

import WeatherDescriptionItem from './WeatherDescriptionItem';

const WeatherDescription = ({ weather, temperature }) => {
  return (
    <div className="container temp">
      <div className="row list-group-flush flex-md-row justify-content-center temp">
        <WeatherDescriptionItem
          description={'SUNRISE'}
          value={moment.unix(weather.current.sunrise).format('HH:MM')}
        />
        <WeatherDescriptionItem
          description={'SUNSET'}
          value={moment.unix(weather.current.sunset).format('HH:MM')}
        />
        <WeatherDescriptionItem
          description={'CHANCE OF RAIN'}
          value={`${Math.round(weather.hourly[0].pop * 100)}%`}
        />
        <WeatherDescriptionItem description={'HUMIDITY'} value={`${weather.current.humidity}%`} />
        <WeatherDescriptionItem
          description={'WIND'}
          value={`${windDegreeToText(weather.current.wind_deg)} ${Math.round(
            weather.current.wind_speed
          )} km/hr`}
        />
      </div>
      <div className="row list-group-flush flex-column flex-md-row justify-content-center  border-bottom border-dark  maje">
        <WeatherDescriptionItem
          description={'FEELS LIKE'}
          value={temperature(weather.current.feels_like)}
        />
        <WeatherDescriptionItem
          description={'PRECIPITATION'}
          value={weather.daily[0].rain ? `${weather.daily[0].rain} cm` : '0%'}
        />
        <WeatherDescriptionItem
          description={'PRESSURE'}
          value={`${weather.current.pressure} hPa`}
        />
        <WeatherDescriptionItem
          description={'VISIBILITY'}
          value={`${weather.current.visibility / 100} km`}
        />
        <WeatherDescriptionItem description={'UV INDEX'} value={weather.current.uvi} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherDescription);