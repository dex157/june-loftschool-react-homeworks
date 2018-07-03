import React, { Component } from 'react';
import Switcher from '../Switcher/Switcher';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import CardNumberHolder from '../CardNumberHolder/CardNumberHolder';
import ModalButton from '../ModalButton/ModalButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switcher>
        <VideoPlayer />
        <CardNumberHolder />
        <ModalButton />
      </Switcher>
    );
  }
}

export default App;
