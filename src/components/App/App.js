import React, { Component } from 'react';
import './App.css';
import VideoPlayer from 'components/VideoPlayer';
import Switcher from 'components/Switcher';

class App extends Component {
  div = React.createRef();

  render() {
    return (
      <Switcher>
        <div>
          <VideoPlayer />
        </div>
      </Switcher>
    );
  }
}

export default App;
