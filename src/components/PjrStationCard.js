import React from 'react'

import StationName from './stations/PjrStationName'
import CurrentCard from './current/PjrCurrentCard'
import CurrentTime from './current/CurrentTime'

function StationCard() {

    return (
      <>
      <div className='station'>
        <h2>Nut House Central's Weather</h2>
        <div className='data'>
          <StationName />
        </div>
        <div className='current'>
          <CurrentTime />
        </div>
        <div className='conditions'>
          <h3>Current Conditions</h3>
            <CurrentCard />
        </div>
      </div>
      </>
    );
};

export default StationCard