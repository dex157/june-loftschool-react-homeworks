import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  video = React.createRef();

  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={this.video}>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.handleVideoPlay}>Play</button>
          <button onClick={this.handleVideoStop}>Stop</button>
        </div>
      </div>
    );
  }

  handleVideoPlay = () => {
    this.video.current.play();
  };

  handleVideoStop = () => {
    this.video.current.pause();
  };
}

export default VideoPlayer;
