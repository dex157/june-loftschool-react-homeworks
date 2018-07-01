import React, { Component, Fragment } from 'react';
import './CardForm.css';

class CardForm extends Component {
  handleChangeForm(e) {
    this.props.onChangeForm(e.target.name, e.target.value);
  }

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <form className="card-form" data-test="card-form">
          <input
            value={this.props.cardNumber}
            placeholder="Card number"
            name="cardNumber"
            onChange={e => this.handleChangeForm(e)}
          />
        </form>
      </Fragment>
    );
  }
}

export default CardForm;
