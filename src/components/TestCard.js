import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TestData from './TestData'


function TestCard() {
  
  const [data, setData] = useState([
    {
        lastData: {
          date: '',
          tempf: '',
          tempinf: '',
          dailyrainin: '',
          baromrelin: ''
        }
    }
  ])
const [baseurl] = useState('https://api.ambientweather.net/v1/devices/00:0E:C6:30:16:84?apiKey=8539ff0909864ea78810993651057188b5b6a88eb8194e69a9aa119825a4e804&applicationKey=eaee43c48057495682fb4d792385ea89dcba83f9d05b428cb64273945d167ed6&limit=30')

const [refresh, setRefresh] = useState(true)

const refreshHandler = () => {
    setRefresh(!refresh)
}



  useEffect(() => {
    axios
      .get(`${baseurl}`)
      .then((res) => {
          console.log('Line 34 log:', res.data)
          setData(res.data)
      })
      .catch((err) => {console.log(err)})
  }, [refresh])




    return (
      <div className='pws'>
        <h5>Personal Weather Station</h5>
        <h5>This is data pulled right off the weather station at the home</h5>
        {console.log(data)}
            <table>
              <tr className='head'>
                <th>Date:</th>
                <th>Time:</th>
                <th>Outside Temp:</th>
                <th>Inside Temp:</th>
                <th>Daily Rain:</th>
                <th>Pressure:</th>
              </tr>
              <tr>
                  {data.map(device => (
                      <TestData key={device.lastData} device={device} refreshHandler={refreshHandler} baseurl={baseurl} />
                  ))}
              </tr>
            </table>
      </div>
    );
};

export default TestCard