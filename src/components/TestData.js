import React from 'react'
import axios from 'axios'

const TestData = (props) => {
    console.log(props)

    return (
        <>
        <td>{props.device.lastData.date.substr(5, 5)}-{props.device.lastData.date.substr(0, 4)}</td>
        <td>{props.device.lastData.date.substr(11, 5)} Zulu</td>
        <td>{props.device.lastData.tempf}&#176;</td>
        <td>{props.device.lastData.tempinf}&#176;</td>
        <td>{props.device.lastData.dailyrainin}"</td>
        <td>{(props.device.lastData.baromrelin)*33.86.toFixed()} hPa</td>
        </>
    )
}

export default TestData