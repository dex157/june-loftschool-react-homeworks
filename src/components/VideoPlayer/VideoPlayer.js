import React, { PureComponent, Fragment } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  vidRef = React.createRef();
  playVideo = () => {
    // let vidRef = React.createRef();
    this.vidRef.current.play();
  };
  stopVideo = () => {
    this.vidRef.current.pause();
  };
  render() {
    return (
      <Fragment>
        <div className="video-player">
          <video
            ref={this.vidRef}
            className="video-player__source"
            src={videoFile}
            type="video/mp4"
          >
            {' '}
          </video>
          <button onClick={this.playVideo}>Play</button>
          <button onClick={this.stopVideo}>Stop</button>
        </div>
      </Fragment>
    );
  }
}

export default VideoPlayer;
