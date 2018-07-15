import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class ShowPreview extends PureComponent {
  render() {
    const { id, name, image, summary } = this.props;

    return (
      <li className="serial" key={id}>
        <Link className="serial__link" to={`/shows/${id}`}>
          {name}
        </Link>
        {image && <img className="serial__img" src={image.medium} alt={name} />}
        <div
          className="serial__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </li>
    );
  }
}
