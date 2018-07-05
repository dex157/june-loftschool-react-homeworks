import { createActions } from 'redux-actions';

const { searchRequest, searchSuccess, searchFailure } = createActions(
  'SEARCH_REQUEST',
  'SEARCH_SUCCESS',
  'SEARH_FAILURE'
);

export { searchRequest, searchSuccess, searchFailure };
