import React, { Component } from 'react';

class ShowPreview extends Component {
  render() {
    const { name, image, summary } = this.props;
    return (
      <div>
        <div>
          <a>
            <h3>{name}</h3>
          </a>
          {image && <img src={image.medium} alt={name} />}
        </div>
        <div>{summary}</div>
      </div>
    );
  }
}

export default ShowPreview;
