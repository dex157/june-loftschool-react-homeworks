import React, { PureComponent } from 'react';
import './CardForm.css';

export default class CardForm extends PureComponent {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  handleChangeForm = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;

    return (
      <div className="card-form" data-test="card-form">
        <input
          type="text"
          name="cardNumber"
          placeholder={'0'.repeat(16)}
          value={cardNumber}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}
