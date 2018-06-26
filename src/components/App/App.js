import React, { Component } from 'react';
import './App.css';

import Switcher from '../Switcher'
import VideoPlayer from '../VideoPlayer';

class App extends Component {
  render() {
    return (
      <Switcher>
        <div>A</div>
        <div>B</div>
      </Switcher>
    );
  }
}

export default App;
