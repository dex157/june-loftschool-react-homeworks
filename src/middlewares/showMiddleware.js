import {
  getShowRequest,
  getShowFailure,
  getShowSuccess
} from '../actions/show';
import { show } from '../api';

export const showMiddleware = store => next => action => {
  if (action.type === getShowRequest.toString()) {
    show(action.payload).then(
      function(shows) {
        store.dispatch(getShowSuccess(shows, shows.length));
      },
      function(error) {
        store.dispatch(getShowFailure(error));
      }
    );
  }
  return next(action);
};
