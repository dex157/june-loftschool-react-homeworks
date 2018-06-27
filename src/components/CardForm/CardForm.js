import React, { PureComponent, Fragment } from 'react';
import Title from '../Title';
import './CardForm.css';

class CardForm extends PureComponent {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;
    onChangeForm(name, value);
  };

  componentWillUnmount = () => {};

  render() {
    const { cardNumber } = this.props;
    return (
      <Fragment>
        <Title>Номер карты</Title>
        <div className="card-form">
          <input
            name="cardNumber"
            placeholder="0000000000000000"
            value={cardNumber}
            onChange={this.handleChangeForm}
          />
        </div>
      </Fragment>
    );
  }
}

export default CardForm;
