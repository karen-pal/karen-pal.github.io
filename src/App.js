import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home.js';
import Birth from './components/Birth.js';

function App() {
    return (
      <div>
        <Router>
            <div>
            </div>
            <Switch>
              <Route exact path="/" ><Birth/></Route>
              <Route exact path="/portfolio" ><Birth/></Route>
              <Route exact path="/birth"><Home/></Route>
            </Switch>
        </Router>
        <p className='signature'>karen</p>
      </div>
    );
  }

export default App;
