import React, { useState, useEffect } from 'react'
import axios from 'axios'

function StationCard() {
  
  const [data, setData] = useState([])

  let url = 'https://api.ambientweather.net/v1/devices?applicationKey=a4aae9d5d07b4d05bf8cebdfac5bd119c0e29d475a0e4205876c9cfbd19a3679&apiKey=a7ed8154fbd84a0cbd97f436f03d276b6561f7a9c97a4d8ab7e2e51e4ace5eec'

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
    //   .then((res) => console.log(res.data))
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
                {/* <td>{device.lastData.date.substr(5, 5)}-{device.lastData.date.substr(0, 4)}</td>
                <td>{device.lastData.date.substr(11, 5)}</td>
                <td>{device.lastData.tempf}&#176;</td>
                <td>{device.lastData.tempinf}&#176;</td>
                <td>{device.lastData.dailyrainin}"</td> */}
              </tr>
            </table>
          )}
        </div>
      </div>
      </>
    );
};

export default StationCard