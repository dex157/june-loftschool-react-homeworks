import React from 'react';
import './CardForm.css';

class CardForm extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(event) {
    const { name, value } = event.target;
    this.props.onChangeForm(name, value);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.cardNumber) {
      return null;
    }

    return {
      cardNumber: nextProps.cardNumber
        .replace(/\s|[a-zA-Z]/gi, '')
        .replace(/(\d{0,4})/gi, '$1 ')
        .trim()
    };
  }

  componentWillUnmount() {}

  render() {
    return (
      <form className="card-form" data-test="card-form">
        <input
          type="text"
          name="cardNumber"
          value={this.state.cardNumber}
          onChange={this.handleChangeForm}
          className="form-input"
        />
      </form>
    );
  }
}

export default CardForm;
