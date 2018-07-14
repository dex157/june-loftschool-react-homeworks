import {showRequest, showSuccess, showFailure} from '../actions/show';
import {show} from '../api';

export default store => next => action => {
    if (action.type === showRequest.toString()) {
        show(action.payload)
            .then(series => {
                store.dispatch(showSuccess(series));
            })
            .catch(error => {
                store.dispatch(showFailure(error));
            });
    }

    return next(action);
};