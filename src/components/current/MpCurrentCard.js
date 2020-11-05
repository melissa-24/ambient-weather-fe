import React from 'react'
import { Link } from 'react-router-dom'

// import PWS from './pws/MpPwsCard'
import OpenWeather from './openweather/MpOwCard'
import Wunderground from './wunderground/MpWunderCard'

function CurrentCard() {
  

    return (
      <>
      <nav>
        <Link to='melanie-forecast'>Forecast</Link>
        {/* <Link to='melanie-history'>30 Day History</Link> */}
      </nav>
        {/* <PWS /> */}
        {/* <Wunderground /> */}
        <OpenWeather />
      </>
    );
};

export default CurrentCard