import React from 'react'
import { useHistory } from 'react-router-dom'

function History() {
    const history = useHistory()

    const routeToHoneybee = event => {
        history.push('./history/honeybee')
    }

    return (
        <div className="history">
            <h2>30 Day History for the Stations</h2>
            <div className='buttons'>
                <button className='button' onClick={routeToHoneybee}>
                    Melissa's 30 Day History
                </button>
            </div>
        </div>
    )
}

export default History