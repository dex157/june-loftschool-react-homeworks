import {combineReducers} from 'redux';
import {createActions, handleActions} from 'redux-actions';

export const {userRequest, userSuccess, userFailure} = createActions(
   'USER_REQUEST',
   'USER_SUCCESS',
   'USER_FAILURE'
);

export const
   getData = state => state.users.data,
   getError = state => state.users.error,
   getIsFetched = state => state.users.isFetched,
   getIsFetching = state => state.users.isFetching;

const data = handleActions(
   {
      [userRequest]: () => null,
      [userSuccess]: (state, action) => action.payload.data,
      [userFailure]: () => null
   },
   null
);

const error = handleActions(
   {
      [userRequest]: () => null,
      [userSuccess]: () => null,
      [userFailure]: (state, action) => action.payload.message
   },
   null
);

const isFetched = handleActions(
   {
      [userSuccess]: () => true,
      [userFailure]: () => false
   },
   false
);

const isFetching = handleActions(
   {
      [userRequest]: () => true,
      [userSuccess]: () => false,
      [userFailure]: () => false
   },
   false
);

export default combineReducers({
   data,
   error,
   isFetched,
   isFetching
});
