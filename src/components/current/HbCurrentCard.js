import React from 'react'
import { Link } from 'react-router-dom'

// import PWS from './pws/HbPwsCard'
import OpenWeather from './openweather/HbOwCard'
import Wunderground from './wunderground/HbWunderCard'

function CurrentCard() {
  

    return (
      <>
        <nav>
        <Link to='melissa-extras'>Forecasts and Historical Data</Link>
        </nav>
        {/* <PWS /> */}
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard