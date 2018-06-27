import React, { Component } from 'react';
import './App.css';
import Switcher from 'components/Switcher';
import VideoPlayer from 'components/VideoPlayer';
import CardNumberHolder from 'components/CardNumberHolder';
import ModalButton from 'components/ModalButton'; 

class App extends Component {
  render() {
    return (
      <Switcher>
        <VideoPlayer></VideoPlayer>
        <CardNumberHolder></CardNumberHolder>
        <ModalButton></ModalButton>
      </Switcher>
    )
  }
}

export default App;
