import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer/';
import CardNumberHolder from '../CardNumberHolder/';
import ModalButton from '../ModalButton/';
import Switcher from '../Switcher/';
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
