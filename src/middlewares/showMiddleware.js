import {
  getPageRequest,
  getPageFailure,
  getPageSuccess
} from 'components/ShowPage/pageActions';
import { show } from 'api';

export default store => next => action => {
  if (action.type === getPageRequest.toString()) {
    show(action.payload)
      .then(result => store.dispatch(getPageSuccess(result)))
      .catch(error => store.dispatch(getPageFailure(error)));
  }

  return next(action);
};
