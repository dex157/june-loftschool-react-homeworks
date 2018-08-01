import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {authorize, logout} from "./actions";

const IsAuthorized = handleActions(
  {
    [authorize]: () => {
      return true;
    },
    [logout]: () => false
  },
  false
);

export const getIsAuthorized = state => state.auth.isAuthorized;

export default combineReducers({
  IsAuthorized,
});
