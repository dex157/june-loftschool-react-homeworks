import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class ShowPreview extends PureComponent {
  render() {
    const { id, name, summary, image } = this.props;
    return (
      <div>
        <div className="title">
          <Link to={`/shows/${id}`}>
            <h3 className="series-title">{name}</h3>
          </Link>
          {image && <img src={image} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
