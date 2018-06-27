import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import CardNumberHolder from '../CardNumberHolder/CardNumberHolder';
import ModalButton from '../ModalButton/ModalButton';

import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  componentDidMount() {
    console.log(this.state.selectedChild);
  }

  renderForm = () => {
    const { selectedChild } = this.state;

    const videoPlayer = <VideoPlayer />;

    const cardNumberHolder = <CardNumberHolder />;

    const modalButton = <ModalButton />;

    return selectedChild === 0
      ? videoPlayer
      : selectedChild === 1
        ? cardNumberHolder
        : selectedChild === 2
          ? modalButton
          : null;
  };

  clickHandler = event => {
    this.setState({
      selectedChild: Number(event.target.attributes['data-id'].value)
    });
    console.log(event.target.attributes['data-id'].value);
  };

  render() {
    const stepList = ['Video Player', 'Card number formating', 'ModalButton'];

    const stepComponent = (text, index) => (
      <li
        className="component-list__name"
        data-id={index}
        key={text}
        onClick={this.clickHandler}
      >
        {text}
      </li>
    );

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {stepList.map((step, i) => stepComponent(step, i))}
          </ul>
        </nav>
        <hr />

        <div className="component-wrapper">{this.renderForm()}</div>
      </div>
    );
  }
}

export default Switcher;
