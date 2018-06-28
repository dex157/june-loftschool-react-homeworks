import React, { PureComponent, createRef } from "react";
import videoFile from "./Video.mp4";
import "./VideoPlayer.css";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.video = createRef();
    this.videoPlay = this.videoPlay.bind(this);
    this.videoPause = this.videoPause.bind(this);
  }

  videoPlay() {
    this.video.current.play();
  }

  videoPause() {
    this.video.current.pause();
  }

  render() {
    return (
      <div className="video-player">
        <video ref={this.video} src={videoFile} className="video-player__source"/>
        <div>
          <button onClick={this.videoPlay}>Play</button>
          <button onClick={this.videoPause}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
