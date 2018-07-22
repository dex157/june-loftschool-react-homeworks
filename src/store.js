import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default initialState => {
   const store = createStore(
      rootReducer,
      initialState,
      compose(
         applyMiddleware(sagaMiddleware),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
   );

   sagaMiddleware.run(rootSaga);

   return store;
};
