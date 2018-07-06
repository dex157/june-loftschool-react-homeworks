import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  videoRef = React.createRef();

  handleClickPlay = () => {
    this.videoRef.current.play();
  };

  handleClickPause = () => {
    this.videoRef.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video
          className="video-player__source"
          src={videoFile}
          ref={this.videoRef}
          type="video/mp4"
        />
        <div>
          <button onClick={this.handleClickPlay}>Play</button>
          <button onClick={this.handleClickPause}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
