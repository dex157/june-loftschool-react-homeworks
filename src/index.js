import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import { Provider } from 'react-redux';
import createStore from './store';
import Reducer from './reducers';

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
