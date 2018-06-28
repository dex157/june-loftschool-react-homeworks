import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';

  playVideo() {
    this._videoRef.play();
  }

  stopVideo() {
    this._videoRef.pause();
  }

  render() {
    return (
      <div className="video-player">
        <video
          ref={videoNode => {
            this._videoRef = videoNode;
          }}
          className="video-player__source"
          muted="true"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        <button name="Start" onClick={this.playVideo.bind(this)}>
          Start
        </button>
        <button name="Stop" onClick={this.stopVideo.bind(this)}>
          Stop
        </button>
      </div>
    );
  }
}

export default VideoPlayer;
