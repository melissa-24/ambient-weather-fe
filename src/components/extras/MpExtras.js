import React from 'react'

import Forecast from './forecast/MpForecast'
import History from './history/MpHistoryCard'

function Extras() {
  

    return (
      <>
      <h3>Melanie's Station Forecast and History</h3>
        <Forecast />
        <History />
      </>
    );
};

export default Extras