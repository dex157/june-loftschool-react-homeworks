import './ShowPreview.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ShowPreview extends Component {
   render() {
      const {id, name, image, summary} = this.props;

      return (
         <div className="t-preview preview">
            <div className="preview-top">
               <Link className="t-link" to={`/shows/${id}`}>
                  <h3>{name}</h3>
               </Link>
               {image && <img src={image} alt={name}/>}
            </div>
            <div dangerouslySetInnerHTML={{__html: summary}}/>
         </div>
      );
   }
}