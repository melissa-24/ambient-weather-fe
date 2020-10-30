import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ID from './stationId/PjrStationId'

const { REACT_APP_PJR_CUR_AMB_URL } = process.env

function StationName() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_PJR_CUR_AMB_URL)
      .then((res) => setData(res.data[1].info))
      .catch((err) => console.error(err))
  }, [])

  if (!data.coords) {
    return 'Wappingers Falls, NY, USA'
  }

    return (
      <>
          <h2>{data.name}</h2>
          <div className='location'>
            <span>Location: {data.coords.location}, NY, USA</span>
            <span>Time Zone: America/New_York</span>
            <span>Elevation: {(data.coords.elevation).toFixed()}ft Above Sea Level</span>
            <span>Wunderground Station ID: <ID /></span>
          </div>
      </>
    );
};

export default StationName