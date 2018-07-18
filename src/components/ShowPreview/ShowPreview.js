import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './ShowPreview.css';

class ShowPreview extends PureComponent {
  render() {
    const { id, name, summary, image } = this.props;
    return (
      <div className="show-preview t-preview">
        <div className="title">
          <Link to={`/shows/${id}`}>
            <h3 className="series-title t-link">{name}</h3>
          </Link>
          {image && <img width="300px" src={image} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
