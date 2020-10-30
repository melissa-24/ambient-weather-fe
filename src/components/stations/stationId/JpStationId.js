import React, { useState, useEffect } from 'react'
import axios from 'axios'

const {REACT_APP_HB_CUR_WUND_URL} = process.env

function StationId() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_HB_CUR_WUND_URL)
      // .then((res) => console.log(res.data))
    .then((res) => setData(res.data.observations[0]))
      .catch((err) => console.error(err))
  }, [])

    return (
      <>
        <span>{data.stationID}</span>
        {console.log('StattionId: Wunderground Data', data)}
      </>
    );
};

export default StationId