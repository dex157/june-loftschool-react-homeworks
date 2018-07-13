import React, { Component } from "react";

class CardForm extends Component {

    handleChangeForm = e => {
        const { name, value } = e.target;
        this.props.onChangeForm(name, value);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleChangeForm);
    }

    render() {
        const { cardNumber } = this.props;

        return (
            <div className="card-form">
                <input 
                    type="text"
                    name="cardNumber" 
                    placeholder="0000000000000000" 
                    value={cardNumber}
                    onChange={this.handleChangeForm}
                />
            </div>
        )
    }
}

export default CardForm;
