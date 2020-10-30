import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ID from './stationId/HbStationId'

const { REACT_APP_HB_CUR_AMB_URL } = process.env

function StationName() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_HB_CUR_AMB_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }, [])

    return (
      <>
          {data.map(device => <h2>{device.info.name}</h2>)}
          {data.map(device => 
            <div className='location'>
              <span>Location: {device.info.coords.address}</span>
              <span>Time Zone: {device.lastData.tz}</span>
              <span>Elevation: {(device.info.coords.elevation).toFixed()}ft Above Sea Level</span>
              <span>Wunderground Station ID: <ID /></span>
            </div>
          )}
      </>
    );
};

export default StationName