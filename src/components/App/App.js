import React, { Component } from 'react';
import VideoPlayer from 'components/VideoPlayer';
import CardNumberHolder from 'components/CardNumberHolder';
import ModalButton from 'components/ModalButton';
import Switcher from 'components/Switcher';
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
