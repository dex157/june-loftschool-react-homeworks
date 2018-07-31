import React from 'react';
import Switcher from '../Switcher/Switcher';
import CardNumberHolder from '../CardNumberHolder';
import ModalButton from '../ModalButton';
import VideoPlayer from '../VideoPlayer';
import './App.css';


class App extends React.Component {
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
