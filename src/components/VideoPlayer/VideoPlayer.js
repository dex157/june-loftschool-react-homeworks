import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';

  video = React.createRef();

  Play = () => {
    this.video.current.play();
  };

  Stop = () => {
    this.video.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={this.video}>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.Play}>Play</button>
          <button onClick={this.Stop}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
