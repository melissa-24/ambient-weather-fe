import React, { useState, useEffect } from 'react'
import axios from 'axios'

const { REACT_APP_PJR_CUR_AMB_URL } = process.env

function PWS() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(REACT_APP_PJR_CUR_AMB_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }, [])

    return (
      <>
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
      </>
    );
};

export default PWS