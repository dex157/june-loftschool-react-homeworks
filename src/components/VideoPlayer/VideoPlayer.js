import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  video = React.createRef();

  handleClick = event => {
    if (event.target.innerHTML === 'Play') {
      this.video.current.play();
    } else if (event.target.innerHTML === 'Stop') {
      this.video.current.pause();
    }
  };

  render() {
    return (
      <div className="video-player">
        <video id="video1" className="video-player__source" ref={this.video}>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.handleClick}>Play</button>
          <button onClick={this.handleClick}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
