import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  
  video = React.createRef();

  play = () => {
    this.video.current.play();
  }

  stop = () => {
    this.video.current.pause();
  }

  render() {
    return (
      <div className="video-player">
        <video ref={this.video} className="video-player__source">
          <source src={videoFile} type='video/mp4' />
        </video>
        <div>
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;