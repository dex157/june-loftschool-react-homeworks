import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShowPreview extends Component {
  render() {
    const { name, image, summary, id } = this.props;
    return (
      <div className="t-search-result">
        <div className="preview t-preview">
          <Link to={`/shows/${id}`} className="preview__link t-link">
            <h3>{name}</h3>
          </Link>
          {(image !== null) && <img src={image.medium} alt={name} className="preview__image"/>}
        </div>
        <div>
          <p className="preview__descr" dangerouslySetInnerHTML={{ __html: summary }}>
          </p>
        </div>
      </div>
    );
  }
}
