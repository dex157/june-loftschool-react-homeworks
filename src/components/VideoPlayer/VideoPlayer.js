import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';
  handlePlayClick = () => {
    this.video.play();
  };

  handleStopClick = () => {
    this.video.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video
          className="video-player__source"
          ref={video => {
            this.video = video;
          }}
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.handlePlayClick}>Play</button>
          <button onClick={this.handleStopClick}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
