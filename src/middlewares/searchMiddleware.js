import {
  getSearchRequest,
  getSearchFailure,
  getSearchSuccess
} from 'components/Search/searchActions';
import { search } from 'api';

export default store => next => action => {
  if (action.type === getSearchRequest.toString()) {
    search(action.payload)
      .then(result => store.dispatch(getSearchSuccess(result)))
      .catch(error => store.dispatch(getSearchFailure(error)));
  }

  return next(action);
};