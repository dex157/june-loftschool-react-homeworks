import React from 'react';
import './CardForm.css';

class CardForm extends React.Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };
  componentWillUnmount = () => {};
  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <input
          type="text"
          name="cardNumber"
          onChange={this.handleChangeForm}
          value={cardNumber}
        />
      </div>
    );
  }
}

export default CardForm;
