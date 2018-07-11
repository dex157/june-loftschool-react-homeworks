import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {authorize, logout} from "./auth-actions";

/*import {
  authRequest,
  authSuccess,
  authFailure,
} from './auth-actions';*/
/*import { createSelector } from 'reselect';*/

/*export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const authStatus = handleActions(
  {
    [authSuccess.toString()]: (_state, action) => action.payload
  },
  false,
);

const loadingState = handleActions(
  {
    [authRequest.toString()]: () => LOADING_STATE.loading,
    [authSuccess.toString()]: () => LOADING_STATE.success,
    [authFailure.toString()]: () => LOADING_STATE.failure,
  },
  LOADING_STATE.idle,
);

const error = handleActions(
  {
    [authFailure.toString()]: (_state, action) => action.payload,
  },
  false,
);

export const authorize = handleActions(
  {
    /!*[authRequest.toString()]: (_state, action) => action.payload*!/
  },
  false,
);

export const logout = handleActions(
  {
    /!*[authRequest.toString()]: (_state, action) => action.payload*!/
  },
  false,
);*/



const IsAuthorized = handleActions(
  {
    [authorize]: (state, action) => {
      return action.payload !== undefined ? true : false;
    },
    [logout]: () => false
  },
  false
);

export const getIsAuthorized = state => state.auth.isAuthorized;

export default combineReducers({
  IsAuthorized,
});
