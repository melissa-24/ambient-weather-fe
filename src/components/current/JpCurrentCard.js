import React from 'react'
import { Link } from 'react-router-dom'

// import PWS from './pws/MpPwsCard'
import OpenWeather from './openweather/JpOwCard'
import Wunderground from './wunderground/JpWunderCard'


function CurrentCard() {
  

    return (
      <>
      <nav>
      <Link to='joshua-forecast'>Forecast</Link>
          {/* <Link to='joshua-history'>30 Day History</Link> */}
      </nav>
        {/* <PWS /> */}
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard