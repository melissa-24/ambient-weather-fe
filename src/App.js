import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './css/core.css'

import Home from './components/Home'
import NavBar from './components/nav/NavBar'

import PjrStationCard from './components/PjrStationCard'
import HbStationCard from './components/HbStationCard'
import JpStationCard from './components/JpStationCard'
import MpStationCard from './components/MpStationCard'
import ApStationCard from './components/ApStationCard'
import CpStationCard from './components/CpStationCard'

import HbForecast from './components/forecast/HbForecast'
import PjrForecast from './components/forecast/PjrForecast'
import JpForecast from './components/forecast/JpForecast'
import MpForecast from './components/forecast/MpForecast'
import ApForecast from './components/forecast/ApForecast'
import CpForecast from './components/forecast/CpForecast'

function App() {

    return (
      <>
          <header>
            <h1>The Payne Nut House Family Weather</h1>
            {/* <nav>
              <Link to='/'>Home</Link>
              <Link to='/paynejr-station'>Payne JR's Weather</Link>
              <Link to='/honeybee-station'>Melissa's Weather</Link>
              <Link to='/joshua-weather'>Joshua's Weather</Link>
              <Link to='/melanie-weather'>Melanie's Weather</Link>
              <Link to='/anthony-weather'>Anthony's Weather</Link>
              <Link to='/christopher-weather'>Christopher's Weather</Link>
            </nav> */}
            <NavBar />
          </header>
          <Switch>
            <Route path='/Nut House Central'>
              <PjrStationCard />
            </Route>
            <Route path='/paynejr-forecast'>
              <PjrForecast />
            </Route>
            <Route path="/Melissa's">
              <HbStationCard />
            </Route>
            <Route path='/honeybee-forecast'>
              <HbForecast />
            </Route>
            <Route path="/Joshua's">
              <JpStationCard />
            </Route>
            <Route path='/joshua-forecast'>
              <JpForecast />
            </Route>
            <Route path="/Melanie's">
              <MpStationCard />
            </Route>
            <Route path='/melanie-forecast'>
              <MpForecast />
            </Route>
            <Route path="/Anthony's">
              <ApStationCard />
            </Route>
            <Route path='/anthony-forecast'>
              <ApForecast />
            </Route>
            <Route path="/Christopher's">
              <CpStationCard />
            </Route>
            <Route path='/christopher-forecast'>
              <CpForecast />
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