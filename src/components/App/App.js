import React, { Fragment, Component } from 'react';
import './App.css';
import CardNumberHolder from '../CardNumberHolder/CardNumberHolder';
import ModalButton from '../ModalButton/ModalButton';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CardNumberHolder />
        <br />
        <ModalButton />
      </Fragment>
    );
  }
}

export default App;
