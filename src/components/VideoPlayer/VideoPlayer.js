import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';

  render() {
    return (
      <div className="video-player">
        <video
          src={videoFile}
          className="video-player__source"
          ref="videoRef"
        />

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
    );
  }
}

export default VideoPlayer;
