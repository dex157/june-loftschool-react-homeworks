import React from "react";
import "./PersonalForm.css";

export default class App extends React.Component {
  render() {
    const { firstName, lastName, email } = this.props;

    return <div className="personal-form" data-test="personal-form">
      <h1>Персональная информация</h1>
      <input
        name="firstName"
        placeholder="Имя"
        value={firstName}
        onChange={this.handleChangeForm}
      />
      <input
        name="lastName"
        placeholder="Фамилия"
        value={lastName}
        onChange={this.handleChangeForm}
      />
      <input
        name="email"
        placeholder="электронная почта"
        value={email}
        onChange={this.handleChangeForm}
      />
    </div>;
  }

  handleChangeForm = (event) => {
    const { onChange} = this.props;
    if (typeof onChange === "function") {
      const {name, value} = event.target;
      onChange(name, value);
    }
  };

}