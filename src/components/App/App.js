import React, { Component } from 'react';
import './App.css';
import Switcher from '../Switcher';
import ModalButton from '../ModalButton';
import CardNumber from '../CardNumberHolder';
import VideoPlayer from '../VideoPlayer';

class App extends Component {
  render() {
    return (
      <Switcher>
        <VideoPlayer />
        <CardNumber />
        <ModalButton />
      </Switcher>
    );
  }
}

export default App;
