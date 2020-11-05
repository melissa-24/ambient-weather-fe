import React, { useState, useEffect } from 'react'
import axios from 'axios'

const { REACT_APP_JP_CUR_WUND_URL } = process.env

function Wunderground() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_JP_CUR_WUND_URL)
      // .then((res) => console.log(res.data))
    .then((res) => setData(res.data.observations[0]))
      .catch((err) => console.error(err))
  }, [])

  if (!data.imperial) {
    return null
  }

    return (
      <div className='wunderground'>
      <h5>WunderGround Data = Current Conditions</h5>
        <table className='desktop'>
          <tr>
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
        <table className='mobile'>
          <tr>
            <th>Temp:</th>
            <td>{data.imperial.temp}&#176;</td>
          </tr>
          <tr>
            <th>Heat Index:</th>
            <td>{data.imperial.heatIndex}&#176;</td>
          </tr>
          <tr>
            <th>Wind Chill:</th>
            <td>{data.imperial.windChill}&#176;</td>
          </tr>
          <tr>
            <th>Humidity:</th>
            <td>{data.humidity}&#176;</td>
          </tr>
          <tr>
            <th>Dew Point:</th>
            <td>{data.imperial.dewpt}&#176;</td>
          </tr>
          <tr>
            <th>Pressure:</th>
            <td>{(data.imperial.pressure)*33.86.toFixed()} hPa</td>
          </tr>
        </table>
  </div>
    );
};

export default Wunderground