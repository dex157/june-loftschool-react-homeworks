import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    authorize,
    logout
} from './actions';

const isAuthorized = handleActions(
    {
        [authorize.toString()]: () => true,
        [logout.toString()]: () => false
    },
    false
);

export default combineReducers({
    isAuthorized
  });