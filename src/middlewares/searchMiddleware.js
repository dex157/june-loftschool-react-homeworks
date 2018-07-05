import { search } from 'api';
import {
    getSeriesSuccess, 
    getSeriesRequest, 
    getSeriesFailure
} from 'actions/search';

export default store => next => action => {
    if (action.type === getSeriesRequest.toString()) {
        search(action.payload)
            .then(
                series => {
                    return store.dispatch(
                        getSeriesSuccess(
                            series.map(el => ({
                                image: el.image && el.image.medium, 
                                name: el.name, 
                                id: el.id, 
                                summary: el.summary
                            }))
                        )
                    )
                }
            )
            .catch(error => {
                store.dispatch(
                    getSeriesFailure(error.toString())
                )
            })
    }

    return next(action);
}