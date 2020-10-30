import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './css/core.css'

import Home from './components/Home'
import PjrStationCard from './components/PjrStationCard'
import HbStationCard from './components/HbStationCard'
import JpStationCard from './components/JpStationCard'
import MpStationCard from './components/MpStationCard'
import ApStationCard from './components/ApStationCard'
import CpStationCard from './components/CpStationCard'

function App() {

    return (
      <>
      <header>
        <h1>The Payne Nut House Family Weather</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/paynejr-station'>Payne JR's Weather</Link>
          <Link to='/honeybee-station'>Melissa's Weather</Link>
          <Link to='/josh-weather'>Joshua's Weather</Link>
          <Link to='/melanie-weather'>Melanie's Weather</Link>
          <Link to='/anthony-weather'>Anthony's Weather</Link>
          <Link to='/christopher-weather'>Christophers's Weather</Link>
        </nav>
      </header>
      <Switch>
      <Route path='/paynejr-station'>
          <PjrStationCard />
        </Route>
        <Route path='/honeybee-station'>
          <HbStationCard />
        </Route>
        <Route path='/josh-weather'>
          <JpStationCard />
        </Route>
        <Route path='/melanie-weather'>
          <MpStationCard />
        </Route>
        <Route path='/anthony-weather'>
          <ApStationCard />
        </Route>
        <Route path='/christopher-weather'>
          <CpStationCard />
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