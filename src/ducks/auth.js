import { createActions } from 'redux-actions';
import { handleActions } from 'redux-actions';

export const { authorize, logout } = createActions(
  'AUTHORIZE',
  'LOGOUT',
);

export default handleActions(
  {
    [authorize.toString()]: state => ({ ...state, isAuthorized: true }),
    [logout.toString()]: state => ({ ...state, isAuthorized: false })
  },
  { isAuthorized: false }
);

export const getIsAuthorized = state => state.auth.isAuthorized;
