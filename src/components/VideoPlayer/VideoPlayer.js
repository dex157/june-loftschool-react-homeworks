import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  video = React.createRef();

  playVideo = (e) => {
    this.video.current.play();
  }

  pauseVideo = (e) => {
    this.video.current.pause();
  }

  render() {
    return (
      <div className="component-wrapper">
        <div className="video-player">
          <video className="video-player__source" ref ={this.video}>
            <source src={videoFile} type="video/mp4"/>
          </video>
          <div>
            <button onClick={this.playVideo}>Play</button>
            <button onClick={this.pauseVideo}>Stop</button>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;
