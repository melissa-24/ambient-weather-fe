import React from 'react'

import Forecast from './forecast/PjrForecast'
import History from './history/PjrHistoryCard'

function Extras() {
  

    return (
      <>
      <h3>Nut House Forecast and History</h3>
        <Forecast />
        <History />
      </>
    );
};

export default Extras