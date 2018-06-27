import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  componentDidMount() {
    console.log('DidMount - VideoPlayer');
  }
  render() {
    return (
      <div className="video-player">
        <video className="video-player__source">
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button>Play</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
