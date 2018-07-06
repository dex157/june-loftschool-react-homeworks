import React, { Component } from 'react';
import './App.css';
import CardNumberHolder from '../CardNumberHolder/CardNumberHolder';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import ModalButton from '../ModalButton/ModalButton';
import Switcher from '../Switcher/Switcher';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switcher>
          <VideoPlayer displayName="Video Player" />
          <CardNumberHolder displayName="Card number formatting" />
          <ModalButton displayName="Modal" />
        </Switcher>
      </div>
    );
  }
}

export default App;
