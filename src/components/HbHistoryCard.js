import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HistoryCard() {
  
  const [data, setData] = useState([])

  let url = 'https://api.ambientweather.net/v1/devices/00:0E:C6:30:16:84?apiKey=8539ff0909864ea78810993651057188b5b6a88eb8194e69a9aa119825a4e804&applicationKey=eaee43c48057495682fb4d792385ea89dcba83f9d05b428cb64273945d167ed6&limit=30'

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }, [url])

    return (
      <>
      <div className='history'>
        <h2>Station's 30 Day History</h2>
        {data.map( device => 
            <table>
                <tr>
                    <th>Date:</th>
                    <th>Temp:</th>
                    <th>Humidity:</th>
                </tr>
                <tr>
                    <td>{device.date}</td>
                    <td>{device.tempf}&#176;</td>
                    <td>{device.humidity}&#176;</td>
                </tr>
            </table>
        )}
      </div>
      </>
    );
};

export default HistoryCard