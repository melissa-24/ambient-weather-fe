import React, { useState, useEffect } from 'react'
import axios from 'axios'

const { REACT_APP_PJR_CUR_WUND_URL } = process.env

function Wunderground() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_PJR_CUR_WUND_URL)
      .then((res) => setData(res.data.observations[0]))
      .catch((err) => console.error(err))
  }, [])

  if (!data.imperial) {
    return null
  }

    return (
      <div className='wunderground'>
          <h5>WunderGround Data</h5>
          <h5>This data is pull from Wunderground.com</h5>
          <h5>Data comes from the above Personal Weather Station, plus others</h5>
          {/* {data.map(station => <p>{station.stationID}</p>)} */}
          {console.log('WunderCard: Wunderground Data', data)}
          {/* {data.stationID} */}
            <table>
              <tr className='head'>
                <th>Temp:</th>
                <th>Heat Index:</th>
                <th>Wind Chill:</th>
                <th>Humidity:</th>
                <th>Dew Point:</th>
                <th>Pressure:</th>
              </tr>
              <tr>
                <td>{data.imperial.temp}&#176;</td>
                <td>{data.imperial.heatIndex}&#176;</td>
                <td>{data.imperial.windChill}&#176;</td>
                <td>{data.humidity}&#176;</td>
                <td>{data.imperial.dewpt}&#176;</td>
                <td>{(data.imperial.pressure)*33.86.toFixed()} hPa</td>
              </tr>
            </table>
      </div>
    );
};

export default Wunderground