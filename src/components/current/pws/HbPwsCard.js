import React, { useState, useEffect } from 'react'
import axios from 'axios'


function PWS() {
  
  const [data, setData] = useState([])

  let url = 'https://api.ambientweather.net/v1/devices?applicationKey=eaee43c48057495682fb4d792385ea89dcba83f9d05b428cb64273945d167ed6&apiKey=8539ff0909864ea78810993651057188b5b6a88eb8194e69a9aa119825a4e804'

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      // .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
  }, [url])

  if (!data.lastData) {
    return null
  }

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