import React from 'react';
import { Link } from 'react-router-dom';
import './ShowPreview.css';

const ShowPreview = ({ id, name, image, summary }) => {
  return (
    <div key={id} className="t-preview">
      <div>
        <Link className='t-link' to={`/shows/${id}`} key={id}>
          <h3>{name}</h3>
        </Link>
        {image === null ? null : <img src={image} alt={name} />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} key={summary} />
    </div>
  );
};

export default ShowPreview;
