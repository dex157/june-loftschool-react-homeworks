import React, { Component } from 'react';
import './PersonalForm.css';
import Title from 'components/Title';

class PersonalForm extends Component {
    handleChangeForm = e => {
        const { name, value } = e.target;
        this.props.onChangeForm(name, value);
    }

    render() {
        return (
            <div data-test='personal-form'>
                <Title>Персональная информация</Title>
                <div className="personal-form">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="firstName" 
                        onChange={this.handleChangeForm} 
                        value={this.props.firstName}/>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="lastName" 
                        onChange={this.handleChangeForm} 
                        value={this.props.lastName}/>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="email" 
                        onChange={this.handleChangeForm} 
                        value={this.props.email}/>
                </div>
            </div>  
        );
    }
}

export default PersonalForm;