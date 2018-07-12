import React, { Component } from "react";

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

    handleClickNextForm() {
        this.setState({
            step: this.state.step + 1
        });
    }

    isFormCommitable() {
        // if (state.firstName !== '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')) {
        //     true
        // } else {
        //     false
        // }
    }

    renderForm() {

    }

    render() {
        return (
            <div className="container">
                <div className="tab-panel"></div>
                <div className="form-content"></div>
                <div className="button-panel">
                    <button 
                        className="button-next" 
                        disabled="" 
                        onClick={this.handleClickNextForm}
                        >Next</button>
                </div>
            </div>
        )
    }
}

export default App;