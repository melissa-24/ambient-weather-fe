import React from 'react'
import { Link } from 'react-router-dom'

import PWS from './pws/HbPwsCard'
import OpenWeather from './openweather/HbOwCard'
import Wunderground from './wunderground/HbWunderCard'

function CurrentCard() {
  

    return (
      <>
        <nav>
          <Link to='honeybee-forecast'>Forecast</Link>
          {/* <Link to='honeybee-history'>30 Day History</Link> */}
        </nav>
        <PWS />
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard