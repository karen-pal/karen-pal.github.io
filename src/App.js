import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home.js';
import Birth from './components/Birth.js';

function App() {
    return (
      <div>
        <Router>
            <div className ='home'>
                <Home/>
            </div>
            <div className='navbar'>
                <Link to="/birth"> <button> ø</button></Link>
            </div>
            <Switch>
              <Route exact path="/" ><Home/></Route>
              <Route exact path="/birth"><Birth/></Route>
            </Switch>
        </Router>
      </div>
    );
  }

export default App;
