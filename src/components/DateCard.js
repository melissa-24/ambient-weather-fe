import React, { useState, useEffect } from 'react'
import axios from 'axios'

function StationCard() {
  
  const [data, setData] = useState([])

  let url = 'https://api.ambientweather.net/v1/devices?applicationKey=a4aae9d5d07b4d05bf8cebdfac5bd119c0e29d475a0e4205876c9cfbd19a3679&apiKey=a7ed8154fbd84a0cbd97f436f03d276b6561f7a9c97a4d8ab7e2e51e4ace5eec'

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
        <div className='current'>
            <h3>Current Date & Time: {time.curTime}</h3>
            <h3>Zulu Date & Time: {zulu.curTime}</h3>
            {data.map(device => <h2>{device.info.name}</h2>)}
        </div>
      </div>
      </>
    );
};

export default StationCard