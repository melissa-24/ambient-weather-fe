import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ID from './HbStationId'

function StationName() {
  
  const [data, setData] = useState([])

  let url = 'https://api.ambientweather.net/v1/devices?applicationKey=eaee43c48057495682fb4d792385ea89dcba83f9d05b428cb64273945d167ed6&apiKey=8539ff0909864ea78810993651057188b5b6a88eb8194e69a9aa119825a4e804'

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }, [url])

    return (
      <>
          {data.map(device => <h2>{device.info.name}</h2>)}
          {data.map(device => 
            <div className='location'>
              <span>Location: {device.info.coords.address}</span>
              <span>Time Zone: {device.lastData.tz}</span>
              <span>Elevation: {(device.info.coords.elevation).toFixed()} Above Sea Level</span>
              <span>Wunderground Station ID: <ID /></span>
            </div>
          )}
      </>
    );
};

export default StationName