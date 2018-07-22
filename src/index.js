import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppRouter from './components/AppRouter';
import getStore from './store';

import './index.css';

const store = getStore();

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <AppRouter/>
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);
