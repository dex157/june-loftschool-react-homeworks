import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  video = React.createRef();

  playVideo = e => {
    this.video.current.play();
  };

  stopVideo = e => {
    this.video.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video
          className="video-player__source"
          src={videoFile}
          ref={this.video}
        />
        <nav>
          <button onClick={this.playVideo}>Play</button>
          <button onClick={this.stopVideo}>Stop</button>
        </nav>
      </div>
    );
  }
}

export default VideoPlayer;
