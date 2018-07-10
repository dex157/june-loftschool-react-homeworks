import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowPreview.css';

class ShowPreview extends Component {
  render() {
    const { id, name, image, summary } = this.props;

    return (
      <div className="t-preview sc-bdVaJa eSGgCI">
        <div className="sc-bwzfXH ffXQkl">
          <Link to={`/shows/${id}`} className="t-link">
            <h3>{name}</h3>
          </Link>
          {image && <img src={image} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
