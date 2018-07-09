import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './ShowPreview.css';

export default class ShowPreview extends PureComponent {
  render() {
    const { name, id, image, summary } = this.props;
    return (
      <div className="t-preview">
        <div className="preview__header">
          <Link to={`/shows/${id}`} className="t-link">
            <h3>{name}</h3>
          </Link>
          {image && <img src={image.medium} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}
