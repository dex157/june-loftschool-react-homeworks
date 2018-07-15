import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

const requestFollowers = createAction('REQUESTFOLLOWERS');

const successFollowers = createAction('SUCCESSFOLLOWERS');

const failureFollowers = createAction('FAILUREFOLLOWERS');

const getIds = state => state.followers.ids,
  getErrorFollowers = state => state.followers.error,
  getIsFetchedFollowers = state => state.followers.isFetched,
  getIsFetchingFollowers = state => state.followers.isFetching;

export const ids = handleActions(
  {
    [requestFollowers]: () => [],
    [successFollowers]: (_state, action) => action.payload.data,
    [failureFollowers]: () => []
  },
  []
);

export const error = handleActions(
  {
    [requestFollowers]: () => null,
    [successFollowers]: () => null,
    [failureFollowers]: (_state, action) => action.payload.message
  },
  null
);

const isFetched = handleActions(
  {
    [successFollowers]: () => true,
    [failureFollowers]: () => false
  },
  false
);

export const isFetching = handleActions(
  {
    [requestFollowers]: () => true,
    [successFollowers]: () => false,
    [failureFollowers]: () => false
  },
  false
);

export {
  requestFollowers,
  successFollowers,
  failureFollowers,
  getIds,
  getErrorFollowers,
  getIsFetchedFollowers,
  getIsFetchingFollowers
};

export default combineReducers({ ids, error, isFetched, isFetching });
