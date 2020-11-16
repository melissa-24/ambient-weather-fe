import React from 'react'
import { Link } from 'react-router-dom'

// import PWS from './pws/MpPwsCard'
import OpenWeather from './openweather/ApOwCard'
import Wunderground from './wunderground/ApWunderCard'

function CurrentCard() {
  

    return (
      <>
        <nav>
          <Link to='anthony-extras'>Forecasts and Historical Data</Link>
        </nav>
        {/* <PWS /> */}
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard