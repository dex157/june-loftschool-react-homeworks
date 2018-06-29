import React from "react";
import "./CardForm.css";

export default class CardForm extends React.Component {
  render() {
    const { cardNumber } = this.props;

    return <div className="card-form" data-test="card-form">
      <h1>Номер карты</h1>
      <input
        name="cardNumber"
        placeholder={"0".repeat(16)}
        value={ cardNumber }
        onChange={this.handleChangeForm}
      />
    </div>;
  }

  handleChangeForm = event => {
    const { onChange } = this.props;
    if (typeof onChange === "function") {
      const { name, value } = event.target;
      if (value.length > 16) return;
      onChange(name, value);
    }
  };
}