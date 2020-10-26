import React, { useState, useEffect } from 'react'
import axios from 'axios'


function StationId() {
  
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
      <>
        <span>{data.stationID}</span>
      </>
    );
};

export default StationId