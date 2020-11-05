import React, { useState, useEffect } from 'react'
import axios from 'axios'

const { REACT_APP_HB_CUR_AMB_URL } = process.env

function StationName() {

    const [data, setData] = useState([])

    useEffect(() => {
      axios
        .get(REACT_APP_HB_CUR_AMB_URL)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err))
    }, [])

    return (
        <>
        {data.map(device => <h2>{device.info.name}</h2>)}
        </>
    )
}

export default StationName