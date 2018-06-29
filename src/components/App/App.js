import React, {Component} from 'react';

export default class App extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    };

    handleClickNextForm = () => {
        this.setState({
            step: this.state.step + 1
        })
    };

    handleTabClick = () => {

    };

    render() {
        return (
            <div className="container">
                <div className="tab-panel">

                </div>
                <div className="form-content">

                </div>
                <div className="button-panel">
                    <button className="button-next" onClick={this.handleClickNextForm}>Next</button>
                </div>
            </div>
        );
    }
}
