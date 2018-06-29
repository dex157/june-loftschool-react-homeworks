import React, {Component} from 'react';

export default class PersonalForm extends Component {
    handleChangeForm = event => {

    };

    render() {
        return (
            <div className="personal-form">
                <input name="firstName" onChange={this.handleChangeForm} value={this.state.firstName}/>
                <input name="lastName" onChange={this.handleChangeForm} value={this.state.lastName}/>
                <input name="email" onChange={this.handleChangeForm} value={this.state.email}/>
            </div>
        );
    }
}
