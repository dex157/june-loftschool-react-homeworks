import React, { Component } from 'react';

class CardNumberHolder extends Component {
  componentDidMount() {
    console.log('DidMount - CardNumberHolder');
  }

  render() {
    return <input type="number" />;
  }
}

export default CardNumberHolder;
