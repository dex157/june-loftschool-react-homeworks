import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class ShowPreview extends PureComponent {
  render() {
    const { id, name, image, summary } = this.props;

    return (
      <div className="t-preview">
        <div>
          <Link to={`shows/${id}`} className="t-link">
            {name}
          </Link>
          {image && <img src={image} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
