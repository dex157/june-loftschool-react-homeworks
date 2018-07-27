import { handleActions } from 'redux-actions';
import { authorize, logout } from './actions';

export default handleActions(
  {
    [authorize]: () => ({ isAuthorized: true }),
    [logout]: () => ({ isAuthorized: false })
  },
  {
    isAuthorized: false
  }
);
