import React from 'react'
import { Link } from 'react-router-dom'

// import PWS from './pws/PjrPwsCard'
import OpenWeather from './openweather/PjrOwCard'
import Wunderground from './wunderground/PjrWunderCard'

function CurrentCard() {
  

    return (
      <>
        <nav>
          <Link to='paynejr-forecast'>Forecast</Link>
          {/* <Link to='paynejr-history'>30 Day History</Link> */}
        </nav>
        {/* <PWS /> */}
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard