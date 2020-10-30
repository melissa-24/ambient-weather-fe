import React, { useState, useEffect } from 'react'
import axios from 'axios'

const { REACT_APP_HB_CUR_AMB_URL } = process.env

function PWS() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_HB_CUR_AMB_URL)
      .then((res) => setData(res.data))
      // .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
  }, [])

    return (
      <div className='pws'>
        <h5>Personal Weather Station</h5>
        <h5>This is data pulled right off the weather station at the home</h5>
        {console.log('PwsCard: PWS Data', data)}
            <table>
              <tr className='head'>
                <th></th>
                <th>Temp:</th>
                <th>Feels Like:</th>
                <th>Humidity:</th>
                <th>Dew Point:</th>
                <th>Daily Rain:</th>
                <th>Pressure:</th>
              </tr>
              {data.map(device => 
              <tr>
                <th>Outside Conditions:</th>
                {/* <td>{device.lastData.date.substr(5, 5)}-{device.lastData.date.substr(0, 4)}</td> */}
                {/* <td>{device.lastData.date.substr(11, 5)} Zulu</td> */}
                <td>{device.lastData.tempf}&#176;</td>
                <td>{device.lastData.feelsLike}&#176;</td>
                <td>{device.lastData.humidity}&#176;</td>
                <td>{device.lastData.dewPoint}&#176;</td>
                <td>{device.lastData.dailyrainin}"</td>
                <td>{(device.lastData.baromrelin)*33.86.toFixed()} hPa</td>
              </tr>
              )}
              {data.map(device => 
                <tr>
                  <th>Inside Conditions:</th>
                  <td>{device.lastData.tempinf}&#176;</td>
                  <td>{device.lastData.feelsLikein}&#176;</td>
                  <td>{device.lastData.humidityin}&#176;</td>
                  <td>{device.lastData.dewPointin}&#176;</td>
                  <td colspan="2"></td>
                </tr>
                )}
            </table>
      </div>
    );
};

export default PWS