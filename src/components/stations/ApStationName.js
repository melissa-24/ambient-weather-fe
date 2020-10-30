// import React, {useState, useEffect } from 'react'
import React from 'react'
// import axios from 'axios'

// import Id from './stationId/ApStationId'

function StationName() {

    return (
      <>
          <h2>Gleason Station</h2>
          <div className='location'>
            <span>Location:  Martin, TN, USA</span>
            <span>Time Zone: America/Chicago</span>
            <span>Elevation: 364 ft Above Sea Level</span>
            <span>Wunderground Station ID: KTNGLEAS2</span>
          </div>
      </>
    );
};

export default StationName