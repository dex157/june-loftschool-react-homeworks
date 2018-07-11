import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowPreview extends Component {
  render() {
    const { id, name, image, summary } = this.props;
    return (
      <div className="t-preview">
        <div>
          <Link to={`/shows/${id}`} className="t-link">
            <h3>{name}</h3>
          </Link>
        </div>
        {image && <img src={image.medium} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
