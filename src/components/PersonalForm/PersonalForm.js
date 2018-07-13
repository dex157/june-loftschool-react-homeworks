import React, { Component } from "react";

class PersonalForm extends Component {

    handleChangeForm = e => {
        const { name, value } = e.target;
        this.props.onChangeForm(name, value);
    }

    render() {
        const { firstName, lastName, email } = this.props;

        return (
            <div className="personal-form">
                <input 
                    type="text"
                    name="firstName" 
                    placeholder="First name"
                    value={firstName}
                    onChange={this.handleChangeForm}
                />
                <input 
                    type="text"
                    name="lastName" 
                    placeholder="Last name"
                    value={lastName}
                    onChange={this.handleChangeForm}
                />
                <input 
                    type="text"
                    name="email" 
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChangeForm}
                />
            </div>
        )
    }
}

export default PersonalForm;
