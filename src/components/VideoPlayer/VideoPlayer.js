import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      play: true
    };
  }

  playVideHandler = () => {
    if (this.state.play) {
      this.myRef.current.pause();
      this.setState(state => ({
        play: false
      }));
    } else {
      this.myRef.current.play();
      this.setState(state => ({
        play: true
      }));
    }
  };

  render() {
    return (
      <div className="video-player">
        <video ref={this.myRef} className="video-player__source">
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.playVideHandler}>Play</button>
          <button onClick={this.playVideHandler}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
