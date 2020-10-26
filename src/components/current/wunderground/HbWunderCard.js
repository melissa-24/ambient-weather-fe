import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Wunderground() {
  
  const [data, setData] = useState([])

  let url = 'https://api.weather.com/v2/pws/observations/current?stationId=KPABERWI22&format=json&units=e&apiKey=2e728fdc6fe646aeb28fdc6fe626aecd'

  useEffect(() => {
    axios
      .get(url)
      // .then((res) => console.log(res.data))
    .then((res) => setData(res.data.observations[0]))
      .catch((err) => console.error(err))
  }, [url])

    return (
      <div className='wunderground'>
          <h5>WunderGround Data</h5>
          {/* {data.map(station => <p>{station.stationID}</p>)} */}
          {console.log(data)}
          {data.stationID}
            <table>
              <tr className='head'>
                <th>Date:</th>
                <th>Time:</th>
                <th>Outside Temp:</th>
                <th>Inside Temp:</th>
                <th>Daily Rain:</th>
              </tr>
              <tr>
              </tr>
            </table>
      </div>
    );
};

export default Wunderground