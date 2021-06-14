import React, {  Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Blog from './components/Blog.js';

function App() {
    return (
      <div>
        <Router>
            <div className='navbar'>
                <Link to="/"> <button> Home </button> </Link>
                <Link to="/projects"> <button> Projects </button> </Link>
                <Link to="/resume"><button>Resume</button></Link>
                <Link to="/blog"><button>Blog</button></Link>
            </div>
            <Switch>
              <Route exact path="/" ><Home/></Route>
              <Route exact path="/projects"><Projects/></Route>
              <Route exact path="/resume"> <Resume/></Route>
              <Route exact path="/blog"><Blog/></Route>
            </Switch>
        </Router>
      </div>
    );
  }

export default App;
