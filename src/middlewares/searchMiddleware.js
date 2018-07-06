import { search } from '../api';
import {searchRequest, searchSuccess, searchFailure} from '../actions/search';

export default store => next => action => { if (action.type === searchRequest.toString()) {
    search(action.query).then(searchResult => {
      store.dispatch(searchSuccess(searchResult));
    }).catch(error => {
      store.dispatch(searchFailure(error)); });
  }

  return next(action);
};
