import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <h1 className='title'>
                {this.props.children}
            </h1>
        ); 
    }
}

export default Title;