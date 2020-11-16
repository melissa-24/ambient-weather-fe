import React from 'react'

import Forecast from './forecast/HbForecast'
import History from './history/HbHistoryCard'

function Extras() {
  

    return (
      <>
      <h3>Melissa's Forecast and History</h3>
        <Forecast />
        <History />
      </>
    );
};

export default Extras