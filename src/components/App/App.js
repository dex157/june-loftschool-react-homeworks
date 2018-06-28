import React, { Component } from 'react';
import './App.css';
import CardNumberHolder from '../CardNumberHolder';
import ModalButton from '../ModalButton';
import Switcher from '../Switcher';
import VideoPlayer from '../VideoPlayer';

export default class App extends Component {
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
