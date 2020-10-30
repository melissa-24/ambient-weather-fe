// import React, {useState, useEffect } from 'react'
import React from 'react'
// import axios from 'axios'

// import Id from './stationId/ApStationId'

function StationName() {

    return (
      <>
          <h2>Arlington Station</h2>
          <div className='location'>
            <span>Location:  Poughkeepsie, NY, USA</span>
            <span>Time Zone: America/Chicago</span>
            <span>Elevation: 220 ft Above Sea Level</span>
            <span>Wunderground Station ID: KNYPOUGH13</span>
          </div>
      </>
    );
};

export default StationName