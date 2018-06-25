import React, { Component } from "react";
import "./CardForm.css";

export default class CardForm extends Component {
  handleChangeForm = (event) => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="card-form">
        <input name="cardNumber" onChange={this.handleChangeForm}/>
      </div>
    );
  }
}