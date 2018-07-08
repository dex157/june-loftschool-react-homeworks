import React from 'react';
import { Link } from 'react-router-dom';
import './ShowPreview.css';

class ShowPreview extends React.PureComponent {
  render() {
    const { image, name, summary, id } = this.props;
    return (
      <li className="t-preview">
        <Link to={`/shows/${id}`} className="t-link t-preview__link">
          {name}
        </Link>
        {image && <img src={image.medium || image.original} alt={name} className="t-preview__image" />}
        <div
          className="t-preview__text"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </li>
    );
  }
}

export default ShowPreview;
