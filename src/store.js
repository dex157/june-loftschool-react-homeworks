import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default () =>
  createStore(
    rootReducer,
    compose(
      window.devToolsExtension
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );
