import { createActions, handleActions } from 'redux-actions';

const { authRequest, authSuccess, authFailure } = createActions(
  'AUTH_REQUEST',
  'AUTH_SUCCESS',
  'AUTH_FAILURE'
);

const isAuthorized = handleActions(
  {
    [authSuccess]: () => true,
    [authFailure]: () => false
  },
  false
);

export { authRequest, authSuccess, authFailure };

export default isAuthorized;
