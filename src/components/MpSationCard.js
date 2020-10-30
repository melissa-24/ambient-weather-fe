import React from 'react'

import StationName from './stations/MpStationName'
import CurrentCard from './current/MpCurrentCard'
import CurrentTime from './current/CurrentTime'

function StationCard() {

    return (
      <>
      <div className='station'>
        <h2>Melanie's Weather</h2>
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