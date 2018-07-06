import React from 'react';
import { Redirect } from 'react-router-dom';

const Private = (props) => {
  return props.isAuthorized ? <p>Private page</p> : <Redirect to="/login" />;
};

export default Private;
