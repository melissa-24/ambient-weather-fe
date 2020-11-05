import React from 'react'

import StationName from './stations/PjrStationName'
import CurrentCard from './current/PjrCurrentCard'
import CurrentTime from './current/CurrentTime'

function StationCard() {

    return (
      <>
      <div className='station'>
        <h2>Weather at Nut House Central</h2>
        <div className='data'>
          <StationName />
        </div>
        <div className='current'>
          <CurrentTime />
        </div>
        <div className='conditions'>
          <CurrentCard />
        </div>
      </div>
      </>
    );
};

export default StationCard