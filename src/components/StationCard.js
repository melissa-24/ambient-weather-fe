import React, { useState, useEffect } from 'react'
import axios from 'axios'

function StationCard() {
  
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
      <div className='station'>
        <div className='data'>
          {data.map(device => <h2>{device.info.name}</h2>)}
          {data.map(device => 
            <div className='location'>
              <h3>{device.info.coords.address}</h3>
              <h3>{device.lastData.tz}</h3>
            </div>
          )}
        </div>
        {data.map(device => 
          <table>
            <tr className='head'>
              <th>Current Date/Time:</th>
              <th>Current Outside Temp:</th>
              <th>Current Inside Temp:</th>
              <th>Current Daily Rain:</th>
            </tr>
            <tr>
              <td>{device.lastData.date}</td>
              <td>{device.lastData.tempf}&#176;</td>
              <td>{device.lastData.tempinf}&#176;</td>
              <td>{device.lastData.dailyrainin}"</td>
            </tr>
          </table>
        )}
      </div>
      </>
    );
};

export default StationCard