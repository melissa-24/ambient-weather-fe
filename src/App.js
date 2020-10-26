import React from 'react'
import './css/core.css'

import StationCard from './components/StationCard'
import HistoryCard from './components/HistoryCard'

function App() {

    return (
      <>
      <h1>
        Weather App
      </h1>
      <StationCard />
      <HistoryCard />
      <footer>
        <p>Created by Melissa</p>
        <p>&#169; 2020</p>
      </footer>
      </>
    );
};

export default App;