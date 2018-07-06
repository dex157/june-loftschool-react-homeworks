import { search } from '../api';
import {searchRequest, searchSuccess, searchFailure} from '../actions/search';

export const searchMiddleware = store => next => action => {
  console.log('searchMiddleware');
  console.log('action =', action);
  console.log('searchRequest =', searchRequest);
  console.log('searchRequest.toString() =', searchRequest.toString());

  if (action.type === searchRequest.toString()) {
    search(action.query).then(searchResult => {
      store.dispatch(searchSuccess(searchResult));
    }).catch(error => {
      store.dispatch(searchFailure(error)); });
  }

  return next(action);
};
