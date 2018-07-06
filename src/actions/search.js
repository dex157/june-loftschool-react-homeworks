import { createActions } from 'redux-actions';

const { searchRequest, searchSuccess, searchFailure } = createActions('_REQUEST', '_SUCCESS', '_FAILURE');

export { searchRequest, searchSuccess, searchFailure };