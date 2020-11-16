import React from 'react'

import Forecast from './forecast/ApForecast'
import History from './history/ApHistoryCard'

function Extras() {
  

    return (
      <>
      <h3>Anthony's Station Forecast and History</h3>
        <Forecast />
        <History />
      </>
    );
};

export default Extras