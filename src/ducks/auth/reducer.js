import { handleActions } from 'redux-actions';
import { authorize, logout } from './action';

const isAuthorized = handleActions(
  {
    [authorize.toString()]: () => true,
    [logout.toString()]: () => false
  },
  false
);

export default isAuthorized;
