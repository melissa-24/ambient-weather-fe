import axios from 'axios'
import React, { useState, useEffect } from 'react'


const { REACT_APP_JP_HIST_WUND_URL } = process.env

function History() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(REACT_APP_JP_HIST_WUND_URL)
            .then((res) => setData(res.data.summaries))
            .catch((err) => console.log(err))
    }, [])

    if (!data[0]) {
        return <p>Historical Data Unavailable at this time</p>
    }

    return (
        <div className='forecast'>
        <h2>7 Day History</h2>
        {console.log('JP History Data', data)}
        <table>
            <tr>
                <th></th>
                <th>Temp</th>
                <th>Humidity</th>
                <th>Wind Chill</th>
                <th>Heat Index</th>
            </tr>
            <tr>
                <th>Yesterday</th>
                <td>{data[0].imperial.tempAvg}&#176;</td>
                <td>{data[0].humidityAvg}&#176;</td>
                <td>{data[0].imperial.windchillAvg}&#176;</td>
                <td>{data[0].imperial.heatindexAvg}&#176;</td>
            </tr>
            <tr>
                <th>2 Days Ago</th>
                <td>{data[1].imperial.tempAvg}&#176;</td>
                <td>{data[1].humidityAvg}&#176;</td>
                <td>{data[1].imperial.windchillAvg}&#176;</td>
                <td>{data[1].imperial.heatindexAvg}&#176;</td>
            </tr>
            <tr>
                <th>3 Days Ago</th>
                <td>{data[2].imperial.tempAvg}&#176;</td>
                <td>{data[2].humidityAvg}&#176;</td>
                <td>{data[2].imperial.windchillAvg}&#176;</td>
                <td>{data[2].imperial.heatindexAvg}&#176;</td>
            </tr>
            <tr>
                <th>4 Days Ago</th>
                <td>{data[3].imperial.tempAvg}&#176;</td>
                <td>{data[3].humidityAvg}&#176;</td>
                <td>{data[3].imperial.windchillAvg}&#176;</td>
                <td>{data[3].imperial.heatindexAvg}&#176;</td>
            </tr>
            <tr>
                <th>5 Days Ago</th>
                <td>{data[4].imperial.tempAvg}&#176;</td>
                <td>{data[4].humidityAvg}&#176;</td>
                <td>{data[4].imperial.windchillAvg}&#176;</td>
                <td>{data[4].imperial.heatindexAvg}&#176;</td>
            </tr>
            <tr>
                <th>6 Days Ago</th>
                <td>{data[5].imperial.tempAvg}&#176;</td>
                <td>{data[5].humidityAvg}&#176;</td>
                <td>{data[5].imperial.windchillAvg}&#176;</td>
                <td>{data[5].imperial.heatindexAvg}&#176;</td>
            </tr>
            <tr>
                <th>1 Week Ago</th>
                <td>{data[6].imperial.tempAvg}&#176;</td>
                <td>{data[6].humidityAvg}&#176;</td>
                <td>{data[6].imperial.windchillAvg}&#176;</td>
                <td>{data[6].imperial.heatindexAvg}&#176;</td>
            </tr>
        </table>
        </div>
    )
}

export default History