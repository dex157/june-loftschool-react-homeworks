import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './ShowPreview.css';

class ShowPreview extends PureComponent {
  render() {
    const { id, name, image, summary } = this.props;

    return (
      <div className="preview t-preview" key={id}>
        <Link to={`/shows/${id}`} className="preview__link t-link">
          {name}
        </Link>

        {image != null && (
          <img className="preview__image" src={image} alt={name} />
        )}

        <p
          className="preview__descr"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    );
  }
}

export default ShowPreview;
