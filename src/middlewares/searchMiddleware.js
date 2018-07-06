import { search } from '../api';
import {searchRequest} from '../actions/search';

export const searchMiddleware = store => next => action => {
  console.log('searchMiddleware');
  console.log('action =', action);
  console.log('searchRequest =', searchRequest);
  console.log('searchRequest.toString() =', searchRequest.toString());

  if (action.type === searchRequest.toString()) {
    search(action.query);
  }

  return next(action);
};
