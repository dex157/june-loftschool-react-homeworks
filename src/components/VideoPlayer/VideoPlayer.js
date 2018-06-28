import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  playVideHandler = () => {
    this.myRef.current.play();
  };

  stopVideHandler = () => {
    this.myRef.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video
          src={videoFile}
          ref={this.myRef}
          className="video-player__source"
          type="video/mp4"
        />
        <div>
          <button onClick={this.playVideHandler}>Play</button>
          <button onClick={this.stopVideHandler}>Stop</button>
        </div>
      </div>
    );
  }
}
