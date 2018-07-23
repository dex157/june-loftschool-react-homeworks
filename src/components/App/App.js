import React, { Fragment, Component } from 'react';
import './App.css';
import CardNumberHolder from '../CardNumberHolder/CardNumberHolder';
import ModalButton from '../ModalButton/ModalButton';
import Switcher from '../Switcher/Switcher';

class App extends Component {
  render() {
    return (
      <Switcher>
        <CardNumberHolder />
        <br />
        <ModalButton />
      </Switcher>
    );
  }
}

export default App;
