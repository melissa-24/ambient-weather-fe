import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PressureCard() {
  
  const [data, setData] = useState([])

  let url = 'https://api.ambientweather.net/v1/devices?applicationKey=eaee43c48057495682fb4d792385ea89dcba83f9d05b428cb64273945d167ed6&apiKey=8539ff0909864ea78810993651057188b5b6a88eb8194e69a9aa119825a4e804'

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }, [url])

    return (
      <>
      <div className='station'>
    {data.map(item => <p>{(item.lastData.baromrelin)*33.86.toFixed()}hPa</p>)}
      </div>
      </>
    );
};

export default PressureCard