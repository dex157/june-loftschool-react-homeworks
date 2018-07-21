import { createActions } from 'redux-actions';

const {
  searchRequest,
  searchRequestSuccess,
  searchRequestFailure
} = createActions(
  'SEARCH_REQUEST',
  'SEARCH_REQUEST_SUCCESS',
  'SEARCH_REQUEST_FAILURE'
);

export { searchRequest, searchRequestSuccess, searchRequestFailure };
