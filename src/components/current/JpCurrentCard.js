import React from 'react'
import { Link } from 'react-router-dom'

// import PWS from './pws/MpPwsCard'
import OpenWeather from './openweather/JpOwCard'
import Wunderground from './wunderground/JpWunderCard'


function CurrentCard() {
  

    return (
      <>
      <nav>
      <Link to='joshua-extras'>Forecasts and Historical Data</Link>
      </nav>
        {/* <PWS /> */}
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard