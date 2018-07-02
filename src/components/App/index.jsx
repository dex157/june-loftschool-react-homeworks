import React, { Component } from 'react';
import './App.css';
import Step from 'components/Step';
import CardForm from 'components/CardForm';
import PersonalForm from 'components/PersonalForm';

class App extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
    };

    handleClickNextForm = () => {
        this.setState(state => {
            const newStep = state.step === 3 ? 3 : state.step + 1;
            return {
                step: newStep
            }
        });
    }

    handleTabClick = newStep => {
        this.setState(() => {
            return {
                step: newStep
            }
        });
    }

    isFormCommitable = () => {
        const { step, firstName, lastName, email, cardNumber } = this.state;
        const res1 = step === 1 && 
        firstName !== '' && 
        lastName !== '' && 
        email !== '' && 
        email.includes('@');
        const res2 = step === 2 && cardNumber.length === 16;

        return res1 || res2;
    }

    handleChangeForm = (name, value) => {
        this.setState(() => {
            return {
                [name]: value
            }
        })
    }

    renderForm = () => {
        const { step, firstName, lastName, email, cardNumber } = this.state;
        
        switch (step) {
            case 1:
                return (
                    <PersonalForm
                        firstName={firstName} 
                        lastName={lastName} 
                        email={email} 
                        onChangeForm={this.handleChangeForm}
                    />
                );
            case 2:
                return (
                    <CardForm
                        cardNumber={cardNumber} 
                        onChangeForm={this.handleChangeForm}
                    />
                );
            case 3:
                return <p data-test='congratulations'>Поздравляем!</p>;
            default: 
                return null;
        }
    }

    render() {
        const steps = [
            {
                number: 1, 
                text: 'Personal information'
            }, 
            {
                number: 2, 
                text: 'Card information'
            }, 
            {
                number: 3, 
                text: 'Finish'
            }
        ];

        return (
            <div className="container">
                <div className="tab-panel">
                    {
                        steps.map(el => {
                            return <Step 
                                        key = {el.number}
                                        number = {el.number} 
                                        isSelected = {this.state.step === el.number} 
                                        isClickable = {this.state.step > el.number}
                                        onClick={this.handleTabClick} 
                                    >
                                    {el.text}
                                    </Step>
                        })
                    }
                </div>
                <div className="form-content">
                    {this.renderForm()}
                </div>
                <div className="button-panel">
                    <button disabled={!this.isFormCommitable()} onClick={this.handleClickNextForm} className="button-next">
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

export default App;