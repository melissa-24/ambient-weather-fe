import React from 'react'
import { Link } from 'react-router-dom'

import OpenWeather from './openweather/PjrOwCard'
import Wunderground from './wunderground/PjrWunderCard'

function CurrentCard() {
  

    return (
      <>
        <nav>
          <Link to='paynejr-extras'>Forecasts and Historical Data</Link>
        </nav>
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard