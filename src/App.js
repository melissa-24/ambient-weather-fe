import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './css/core.css'

import Home from './components/Home'
import NavBar from './components/nav/NavBar'

import PjrStationCard from './components/PjrStationCard'
import HbStationCard from './components/HbStationCard'
import JpStationCard from './components/JpStationCard'
import MpStationCard from './components/MpStationCard'
import ApStationCard from './components/ApStationCard'
import CpStationCard from './components/CpStationCard'

import PjrExtras from './components/extras/PjrExtras'
import HbExtras from './components/extras/HbExtras'
import JpExtras from './components/extras/JpExtras'
import MpExtras from './components/extras/MpExtras'
import ApExtras from './components/extras/ApExtras'
import CpExtras from './components/extras/CpExtras'

function App() {

    return (
      <>
          <header>
            <h1>The Payne Nut House Family Weather</h1>
            <NavBar />
          </header>
          <Switch>
            <Route path='/Nut House Central'>
              <PjrStationCard />
            </Route>
            <Route path='/paynejr-extras'>
              <PjrExtras />
            </Route>
            <Route path="/Melissa's">
              <HbStationCard />
            </Route>
            <Route path='/melissa-extras'>
              <HbExtras />
            </Route>
            <Route path="/Joshua's">
              <JpStationCard />
            </Route>
            <Route path='/joshua-extras'>
              <JpExtras />
            </Route>
            <Route path="/Melanie's">
              <MpStationCard />
            </Route>
            <Route path='/melanie-extras'>
              <MpExtras />
            </Route>
            <Route path="/Anthony's">
              <ApStationCard />
            </Route>
            <Route path='/anthony-extras'>
              <ApExtras />
            </Route>
            <Route path="/Christopher's">
              <CpStationCard />
            </Route>
            <Route path='/christopher-extras'>
              <CpExtras />
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