import React, { useState, useEffect } from 'react'
import axios from 'axios'

const {REACT_APP_CP_OW_URL} = process.env

function OpenWeather() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_CP_OW_URL)
      .then((res) => setData(res.data))
      // .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
  }, [])

  if (!data.current) {
    return <p>Current Open Weather data unavailable at this time</p>
  }

    return (
      <div className='openweather'>
        <h5>Open Weather</h5>
            <table className='mobile'>
              <tr>
                <th colspan="2">Current Conditions:</th>
                <th colspan="2">Other Conditions:</th>
              </tr>
              <tr>
                <th>Temp:</th>
                <td>{data.current.temp.toFixed()}&#176;</td>
                <th rowspan="2">Cloud Cover:</th>
                <td rowspan="2">{data.current.clouds}%</td>
              </tr>
              <tr>
              <th>Feels Like:</th>
              <td>{data.current.feels_like.toFixed()}&#176;</td>
              </tr>
              <tr>
              <th>Humidity:</th>
              <td>{data.current.humidity}%</td>
              <th rowspan="2">UV Index:</th>
              <td rowspan="2">{(data.current.uvi)}</td>
              </tr>
              <tr>
              <th>Dew Point:</th>
              <td>{data.current.dew_point.toFixed()}&#176;</td>
              </tr>
              <tr>
              <th>Pressure:</th>
              <td>{data.current.pressure} hPa</td>
              <th>Wind Speed:</th>
              <td>{data.current.wind_speed}mph</td>
              </tr>
            </table>
            <table className='desktop'>
              <tr>
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