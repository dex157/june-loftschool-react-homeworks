import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

const requestUser = createAction('REQUESTUSER');

const successUser = createAction('SUCCESSUSER');

const failureUser = createAction('FAILUREUSER');

const getData = state => state.users.data,
  getError = state => state.users.error,
  getIsFetched = state => state.users.isFetched,
  getIsFetching = state => state.users.isFetching;

export const data = handleActions(
  {
    [requestUser]: () => null,
    [successUser]: (_state, action) => action.payload.data,
    [failureUser]: () => null
  },
  null
);

export const error = handleActions(
  {
    [requestUser]: () => null,
    [successUser]: () => null,
    [failureUser]: (_state, action) => action.payload
  },
  null
);

const isFetched = handleActions(
  {
    [successUser]: () => true,
    [failureUser]: () => false
  },
  false
);

export const isFetching = handleActions(
  {
    [requestUser]: () => true,
    [successUser]: () => false,
    [failureUser]: () => false
  },
  false
);

export {
  requestUser,
  successUser,
  failureUser,
  getData,
  getError,
  getIsFetched,
  getIsFetching
};

export default combineReducers({ data, error, isFetched, isFetching });
