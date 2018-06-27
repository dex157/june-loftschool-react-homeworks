import React, { Component } from 'react';
import './App.css';
import Switcher from 'components/Switcher';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import ModalButton from '../ModalButton';
import CardNumberHolder from '../CardNumberHolder';

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
