import React, { Component } from 'react';
import './App.css';
import Switcher from 'components/Switcher';
import VideoPlayer from 'components/VideoPlayer';
import ModalButton from 'components/ModalButton';
import CardNumberHolder from 'components/CardNumberHolder';

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
