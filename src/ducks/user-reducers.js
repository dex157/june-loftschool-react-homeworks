import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure
} from "./user-actions";

const login = handleActions(
  {
    [getLoginSuccess.toString()]: (_state, action) => action.payload.data.login
  },
  'Loading, please wait...  '
);

const userInfo = handleActions(
  {
    [getUserInfoSuccess.toString()]: (_state, action) => action.payload.data
  },
  'Loading, please wait...  '
);

const loginError = handleActions(
  {
    [getLoginFailure.toString()]: (_state, action) => action.payload
  },
  null
);

const userInfoError = handleActions(
  {
    [getUserInfoFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  login,
  userInfo,
  loginError,
  userInfoError
});