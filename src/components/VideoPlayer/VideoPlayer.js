import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  video = React.createRef();
  
  handlerVideoPlay = () => {
    this.video.current.play();
  };

  handlerVideoPause = () => {
    this.video.current.pause();
  };
  
  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={this.video}>
          <source src={videoFile} type="video/mp4"></source>
        </video>
        <div>
          <button onClick={this.handlerVideoPlay}>Play</button>
          <button onClick={this.handlerVideoPause}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
