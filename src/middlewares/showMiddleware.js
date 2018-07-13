import { show } from '../api';
import { showFailure, showRequest, showSuccess } from '../actions/show';

export default store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(result => store.dispatch(showSuccess(result)))
      .catch(result => store.dispatch(showFailure(result)));
  }
  return next(action);
};
