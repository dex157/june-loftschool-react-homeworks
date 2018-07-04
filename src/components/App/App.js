import React, { Component } from 'react';
import CardNumberHolder from '../CardNumberHolder';
import ModalButton from '../ModalButton';
import VideoPlayer from '../VideoPlayer';
import './App.css';
import Switcher from '../Switcher/Switcher';

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
