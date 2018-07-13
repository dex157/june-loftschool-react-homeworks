import { createActions } from 'redux-actions';

const { authorize, logout } = createActions(
    'AUTHORIZE',
    'LOGOUT'
  );
  
  export { authorize, logout };