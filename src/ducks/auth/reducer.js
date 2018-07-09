import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { authorize, logout } from './action';

const isAuthorized = handleActions(
  {
    [authorize]: (_state, action) => true,
    [logout]: (_state, action) => false
  },
  false
);

export default combineReducers({
  isAuthorized
});
