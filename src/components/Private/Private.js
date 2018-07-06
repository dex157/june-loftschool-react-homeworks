import React from 'react';
<<<<<<< HEAD
import { Redirect } from 'react-router-dom';

const Private = (props) => {
  return props.isAuthorized ? <p>Private page</p> : <Redirect to="/login" />;
};

export default Private;
=======

export default () => <p>Private page</p>;
>>>>>>> 4679c637cdeca45dadaff1d41e614a99ac5934c1
