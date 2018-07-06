import React, {PureComponent} from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

export default class VideoPlayer extends PureComponent {
   videoRef = React.createRef();

   playVideo = () => {
      this.videoRef.current.play();
   };

   pauseVideo = () => {
      this.videoRef.current.pause();
   };

   render() {
      return (
         <div className="video-player">
            <video className="video-player__source"
                   src={videoFile}
                   ref={this.videoRef}
            />
            <div>
               <button onClick={this.playVideo}>Play</button>
               <button onClick={this.pauseVideo}>Stop</button>
            </div>
         </div>
      );
   }
}
