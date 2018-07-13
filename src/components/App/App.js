import React, { Component } from "react";
// import CardForm from '../CardForm/CardForm';
// import PersonalForm from '../PersonalForm/PersonalForm';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            cardNumber: ''
        };
    }

    handleTabClick = e => {
        this.setState({
            step: e.target.innerHTML
        });
    }

    handleChangeForm = e => {
        this.setState({
            firstName: e.target.value
        });
    }

    handleChangeForm = e => {
        const { name, value } = e.target;
        this.props.onChangeForm(name, value);
    }

    handleClickNextForm = e => {
        if (this.state.step !== 3) {
            this.setState({
                step: this.state.step + 1
            });
        } else {
            e.preventDefault();
        }
        
    }

    isFormCommitable = e => {
    }

    renderForm = e => {
    }

    render() {

        return (
            <div className="container">
                <div className="tab-panel"></div>
                <div className="form-content"></div>
                <div className="button-panel">
                    <button 
                        className="button-next"
                        onClick={this.handleClickNextForm}>Next
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
