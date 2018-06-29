import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SimpleRouter from './SimpleRouter';
// import SwitchRouter from './SwitchRouter';
// import Nested from './Nested';
// import Private from './Private';
import ForwardedRef from './ForwardedRef'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ForwardedRef />
  </BrowserRouter>,
  document.getElementById('root'),
);
