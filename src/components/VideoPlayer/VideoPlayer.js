import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

export default class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';
  play = () => {
    this.refs.videoplayer.play();
  };
  stop = () => {
    this.refs.videoplayer.pause();
  };
  render() {
    return (
      <div className="video-player">
        <video
          className="video-player__source"
          ref="videoplayer"
          type="video/mp4"
          src={videoFile}
        />
        <div>
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }
}
