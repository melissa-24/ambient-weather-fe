import React from 'react'

// import PWS from './pws/PjrPwsCard'
import OpenWeather from './openweather/PjrOwCard'
import Wunderground from './wunderground/PjWunderCard'

function CurrentCard() {
  

    return (
      <>
        {/* <PWS /> */}
        <Wunderground />
        <OpenWeather />
      </>
    );
};

export default CurrentCard