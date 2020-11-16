import React from 'react'

import Forecast from './forecast/CpForecast'
import History from './history/CpHistoryCard'

function Extras() {
  

    return (
      <>
      <h3>Christopher's Station Forecast and History</h3>
        <Forecast />
        <History />
      </>
    );
};

export default Extras