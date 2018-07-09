import { handleActions } from 'redux-actions';
import { authorize, logout } from './action';

const isAuthorized = handleActions(
  {
    [authorize.toString()]: (_state, action) => true,
    [logout.toString()]: (_state, action) => false
  },
  false
);

export default isAuthorized;
