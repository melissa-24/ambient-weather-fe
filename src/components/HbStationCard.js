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

  let time = {
    curTime: new Date().toLocaleString(),
}

  let zulu = {
      curTime: new Date().toLocaleString('en-US', {timeZone: 'UTC'}),
  }

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
        <div className='current'>
            <h3>Current Date & Time: {time.curTime}</h3>
            <h3>Zulu Date & Time: {zulu.curTime}</h3>
        </div>
        <div className='lastData'>
          <h3>Latest Data from Station</h3>
          <h4>All Date & Time referances are in Zulu Time</h4>
          {data.map(device => 
            <table>
              <tr className='head'>
                <th>Date:</th>
                <th>Time:</th>
                <th>Outside Temp:</th>
                <th>Inside Temp:</th>
                <th>Daily Rain:</th>
              </tr>
              <tr>
                <td>{device.lastData.date.substr(5, 5)}-{device.lastData.date.substr(0, 4)}</td>
                <td>{device.lastData.date.substr(11, 5)}</td>
                <td>{device.lastData.tempf}&#176;</td>
                <td>{device.lastData.tempinf}&#176;</td>
                <td>{device.lastData.dailyrainin}"</td>
              </tr>
            </table>
          )}
        </div>
      </div>
      </>
    );
};

export default StationCard