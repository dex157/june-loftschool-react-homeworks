import React, {Component} from 'react';
import './App.css';

import Switcher from 'components/Switcher';
import VideoPlayer from 'components/VideoPlayer';
import CardNumberHolder from 'components/CardNumberHolder';
import ModalButton from 'components/ModalButton';

export default class App extends Component {
   render() {
      return (
         <Switcher>
            <VideoPlayer />
            <CardNumberHolder />
            <ModalButton />
         </Switcher>
      )
   }
}
