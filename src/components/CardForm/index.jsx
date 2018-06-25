import React, { Component } from 'react';
import './CardForm.css';
import Title from 'components/Title';

class CardForm extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    handleChangeForm = e => {
        const { name, value } = e.target;
        this.props.onChangeForm(name, value);
    }

    componentWillUnmount = () => {

    }

    render() {
        return (
            <div data-test='card-form' >
                <Title>Номер Карты</Title>
                <div className="card-form">
                    <input 
                        type="text" name="cardNumber" 
                        onChange={this.handleChangeForm} 
                        placeholder='0000000000000000' 
                        value={this.props.cardNumber} />
                </div>
            </div>
            
        );
    }
}

export default CardForm;