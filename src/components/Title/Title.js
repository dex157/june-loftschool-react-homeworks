import React, { Component } from "react";
import './Title.css';

class Title extends Component {

    render() {
        const { step } = this.props;

        const text = step === 1 ? 'Personal information' : step === 2 ? 'Card number' : ''

        return (<h1 className="title">{text}</h1>
        )
    }
}

export default Title;
