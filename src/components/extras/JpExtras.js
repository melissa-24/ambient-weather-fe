import React from 'react'

import Forecast from './forecast/JpForecast'
import History from './history/JpHistoryCard'

function Extras() {
  

    return (
      <>
      <h3>Joshua's Station Forecast and History</h3>
        <Forecast />
        <History />
      </>
    );
};

export default Extras