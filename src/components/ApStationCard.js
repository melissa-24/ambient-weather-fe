import React from 'react'

import StationName from './stations/ApStationName'
import CurrentCard from './current/ApCurrentCard'
import CurrentTime from './current/CurrentTime'

function StationCard() {

    return (
      <>
      <div className='station'>
        <h2>Anthony's Weather</h2>
        <h3>Or close by</h3>
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