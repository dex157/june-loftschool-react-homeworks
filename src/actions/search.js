import { createActions } from 'redux-actions';

export const { searchRequest, searchSuccess, searchFailure } = createActions(
  'SEARCH_REQUEST',
  'SEARCH_SUCCESS',
  'SEARCH_FAILURE'
);
