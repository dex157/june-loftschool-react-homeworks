import React, { Component } from 'react';
import CardNumberHolder from '../CardNumberHolder';
import ModalButton from 'components/ModalButton';
import Switcher from 'components/Switcher';
import VideoPlayer from 'components/VideoPlayer';
import './App.css';

class App extends Component {
    render() { 
        return ( 
            <Switcher>
                <VideoPlayer />
                <CardNumberHolder />
                <ModalButton />
            </Switcher>
         );
    }
}
 
export default App;