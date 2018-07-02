import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';
  state = {
    played: false
  };
  video = React.createRef();
  handleStart = event => {
    const { played } = this.state;
    !played && this.video.current.play();
    !played && this.setState({ played: true });
  };
  handlePause = event => {
    const { played } = this.state;
    played && this.video.current.pause();
    played && this.setState({ played: false });
  };
  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={this.video}>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.handleStart}>Play</button>
          <button onClick={this.handlePause}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
