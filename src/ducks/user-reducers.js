import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getLoginSuccess,
  getLoginFailure,
  getUserInfoSuccess,
  getUserInfoFailure
} from "./user-actions";

const login = handleActions(
  {
    [getLoginSuccess]: (_state, action) => action.payload.data.login
  },
  ''
);

const userInfo = handleActions(
  {
    [getUserInfoSuccess]: (_state, action) => action.payload.data
  },
  {
    login : '',
    id: -1,
    avatar_url : '',
    followers: 0,
    public_repos: 0
  }
);

const loginError = handleActions(
  {
    [getLoginFailure]: (_state, action) => action.payload
  },
  null
);

const userInfoError = handleActions(
  {
    [getUserInfoFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  login,
  userInfo,
  loginError,
  userInfoError
});