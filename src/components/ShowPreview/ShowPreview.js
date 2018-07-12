import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class ShowPreview extends PureComponent {
  render() {
    const StyeldLink = styled(Link)`
      font-size: 1.2rem;
      text-decoration: none;
      display: inline-block;
    `;
    const { id, name, image, summary } = this.props;
    return (
      <div className="t-preview">
        <StyeldLink className="t-link" to={`/shows/${id}`}>
          <h3>{name}</h3>
        </StyeldLink>
        {image && <img src={image.medium} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    );
  }
}

export default ShowPreview;
