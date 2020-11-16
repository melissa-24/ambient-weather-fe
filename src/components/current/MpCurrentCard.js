import React from 'react'
import { Link } from 'react-router-dom'

// import PWS from './pws/MpPwsCard'
import OpenWeather from './openweather/MpOwCard'
import Wunderground from './wunderground/MpWunderCard'

function CurrentCard() {
  

    return (
      <>
      <nav>
        <Link to='melanie-extras'>Forecasts and Historical Data</Link>
      </nav>
        {/* <PWS /> */}
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard