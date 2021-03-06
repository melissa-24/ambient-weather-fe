import React from 'react'

import StationName from './stations/ApStationName'
import CurrentCard from './current/CpCurrentCard'
import CurrentTime from './current/CurrentTime'

function StationCard() {

    return (
      <>
      <div className='station'>
        <h2>Christopher's Weather</h2>
        <h3>Or Close by</h3>
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