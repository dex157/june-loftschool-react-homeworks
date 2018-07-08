import React from 'react';
import { Link } from 'react-router-dom';

import './ShowPreview.css';

export default function ShowPreview({ image, name, id, summary }) {
  const link = `/shows/${id}`;

  return (
    <div className="t-preview sc-bdVaJa eSGgCI">
      <div className="sc-bwzfXH ffXQkl">
        <Link className="t-link" to={link}>
          <h3>{name}</h3>
        </Link>
        {image && <img src={image} alt={name} />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
}
