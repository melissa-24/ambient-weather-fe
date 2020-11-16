import axios from 'axios'
import React, { useState, useEffect } from 'react'


const { REACT_APP_AP_FOR_WUND_URL } = process.env

function Forecast() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(REACT_APP_AP_FOR_WUND_URL)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])

    if (data[0]) {
        return <p>Forecast Data Unavailable at this time</p>
    }

    return (
        <div className='forecast'>
        <h2>Local 5 Day Forecast</h2>
        {console.log('AP Forecast', data)}
        {console.log('forecast data pull', data[0])}
        <table>
            <tr>
                <th></th>
                <th>Moon Phase</th>
                <th>Forecast</th>
                <th>Max Temp</th>
                <th>Min Temp</th>
            </tr>
            <tr>
                <th>{data.dayOfWeek[0]}</th>
                <td>{data.moonPhase[0]}</td>
                <td>{data.narrative[0]}</td>
                <td>{data.temperatureMax[0]}&#176;</td>
                <td>{data.temperatureMin[0]}&#176;</td>
            </tr>
            <tr>
                <th>{data.dayOfWeek[1]}</th>
                <td>{data.moonPhase[1]}</td>
                <td>{data.narrative[1]}</td>
                <td>{data.temperatureMax[1]}&#176;</td>
                <td>{data.temperatureMin[1]}&#176;</td>
            </tr>
            <tr>
                <th>{data.dayOfWeek[2]}</th>
                <td>{data.moonPhase[2]}</td>
                <td>{data.narrative[2]}</td>
                <td>{data.temperatureMax[2]}&#176;</td>
                <td>{data.temperatureMin[2]}&#176;</td>
            </tr>
            <tr>
                <th>{data.dayOfWeek[3]}</th>
                <td>{data.moonPhase[3]}</td>
                <td>{data.narrative[3]}</td>
                <td>{data.temperatureMax[3]}&#176;</td>
                <td>{data.temperatureMin[3]}&#176;</td>
            </tr>
            <tr>
                <th>{data.dayOfWeek[4]}</th>
                <td>{data.moonPhase[4]}</td>
                <td>{data.narrative[4]}</td>
                <td>{data.temperatureMax[4]}&#176;</td>
                <td>{data.temperatureMin[4]}&#176;</td>
            </tr>
        </table>
        </div>
    )
}

export default Forecast