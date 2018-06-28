import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

export default class VideoPlayer extends PureComponent {
  componentDidMount() {
    console.log('DidMount - VideoPlayer');
  }
  render() {
    return (
      <div className="video-player">
        <video
          src={videoFile}
          className="video-player__source"
          ref="videoRef"
        />

        <div>
          <button
            onClick={() => {
              this.refs.videoRef.play();
            }}
          >
            Play
          </button>

          <button
            onClick={() => {
              this.refs.videoRef.pause();
            }}
          >
            Stop
          </button>
        </div>
      </div>
    );
  }
}
