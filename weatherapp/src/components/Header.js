import React from 'react';
import "./Weather.css"; 
import { connect } from 'react-redux';
import SearchLocation from './SearchLocation';
import { toggleTempScale } from '../actions';

const Header = ({ tempScale, toggleTempScale }) => {
  const celsiusFontWeight = tempScale === 'celsius' ? 'bolder' : 'normal';
  const fahrenheitFontWeight = tempScale === 'fahrenheit' ? 'bolder' : 'normal';

  const onToggleTempScale = () => {
    toggleTempScale();
  };
  return (
    <nav className="navbar navbar-dark row mb-4 pt-4 pb-4 text-center temp" >
      <div className="col-sm-2 text-center">
        <img
          className="img-fluid "
          src="https://img.icons8.com/clouds/100/000000/clouds.png"
          style={{ maxWidth: '100px', height: 'auto' }}
          alt={'logo'}
        />
      </div>

      <div className="col-sm-8">
        <SearchLocation />
      </div>
      <div className="col-sm-2">
        <button onClick={onToggleTempScale} type="button" className="btn btn-light w-100">
          <span style={{ fontWeight: celsiusFontWeight }}>°C</span> /{' '}
          <span style={{ fontWeight: fahrenheitFontWeight }}>°F</span>
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { tempScale: state.tempScale };
};

export default connect(mapStateToProps, { toggleTempScale })(Header);