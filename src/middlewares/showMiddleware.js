import { show } from '../api';
import {
  getShowRequest,
  getShowSuccess,
  getShowFailure
} from '../actions/show';

export default store => next => action => {
  if (action.type === getShowRequest.toString()) {
    const id = action.payload;
    show(id)
      .then(show => {
        store.dispatch(getShowSuccess(show));
      })
      .catch(e => {
        store.dispatch(getShowFailure(e.toString()));
      });
  }

  return next(action);
};
