import React, { useState, useEffect } from 'react'
import axios from 'axios'

const {REACT_APP_OPEN_JP_URL} = process.env

function OpenWeather() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_OPEN_JP_URL)
      .then((res) => setData(res.data))
      // .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
  }, [])

  if (!data.current) {
    return null
  }

    return (
      <div className='pws'>
        <h5>Open Weather</h5>
        <h5>This is data pulled from a Open Weather Database</h5>
        {console.log('OwCard: OpenWeather Data', data)}
        {console.log('get test:', data.current.temp)}
            <table>
              <tr className='head'>
                <th></th>
                <th>Temp:</th>
                <th>Feels Like:</th>
                <th>Humidity:</th>
                <th>Dew Point:</th>
                <th>Pressure:</th>
              </tr>
                <tr>
                  <th>Current Conditions:</th>
                  <td>{data.current.temp.toFixed()}&#176;</td>
                  <td>{data.current.feels_like.toFixed()}&#176;</td>
                  <td>{data.current.humidity}%</td>
                  <td>{data.current.dew_point.toFixed()}&#176;</td>
                  <td>{data.current.pressure} hPa</td>
                </tr>
                <tr>
                  <th></th>
                  <th>Cloud Cover:</th>
                  <th colspan="2">UV Index:</th>
                  <th colspan="2">Wind Speed:</th>
                </tr>
                <tr>
                  <th>Other Conditions:</th>
                  <td>{data.current.clouds}%</td>
                  <td colspan="2">{(data.current.uvi)}</td>
                  <td colspan="2">{data.current.wind_speed}mph</td>
                </tr>
            </table>
      </div>
    );
};

export default OpenWeather