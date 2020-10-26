import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './css/core.css'

import Home from './components/Home'
import HbStationCard from './components/HbStationCard'
import PjrStationCard from './components/PjrStationCard'
// import DateCard from './components/DateCard'
import HbHistoryCard from './components/HbHistoryCard'

function App() {

    return (
      <>
      <header>
        <h1>Family Weather</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/honeybee-station'>Melissa's Station</Link>
          <Link to='/paynejr-station'>Payne JR's Station</Link>
          <Link to='/honeybee-history'>Melissa's 30 Day Weather History</Link>
        </nav>
      </header>
      <Switch>
        <Route path='/honeybee-station'>
          <HbStationCard />
        </Route>
        <Route path='/paynejr-station'>
          <PjrStationCard />
          {/* <DateCard /> */}
        </Route>
        <Route path='/honeybee-history'>
          <HbHistoryCard />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <footer>
        <p>Created by Melissa</p>
        <p>&#169; 2020</p>
      </footer>
      </>
    );
};

export default App;