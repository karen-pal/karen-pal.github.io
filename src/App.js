import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch.js';
import logo from './sketches/logo.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <div className='sketch'>
        <P5Wrapper sketch={sketch} ></P5Wrapper>
        </div>
        <div className='logo'>
            <P5Wrapper sketch={logo} ></P5Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
