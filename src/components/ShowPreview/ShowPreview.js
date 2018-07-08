import React, { PureComponent } from 'react';

class ShowPreview extends PureComponent {
  render() {
    const { id, image, name, summary } = this.props;

    return (
      <div className="t-preview">
        <div>
          <a className="t-link" href={'/show/' + id}>
            <h3>{name}</h3>
          </a>
          {image && <img src={image} alt={name} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
