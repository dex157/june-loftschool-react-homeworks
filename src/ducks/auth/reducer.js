import { handleActions } from 'redux-actions';
import { authorize, logout } from './action';

export default handleActions(
  {
    [authorize.toString()]: state => ({ ...state, isAuthorized: true }),
    [logout.toString()]: state => ({ ...state, isAuthorized: false })
  },
  { isAuthorized: false }
);
