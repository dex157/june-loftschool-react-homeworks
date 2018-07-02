import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const initialState = {
  market: {
    orders: []
  },
  farm: {
    orders: [],
    profit: 0,
    productionPrice: 0
  },
  budget: {
    profit: 0,
    marketExpense: 0,
    farmExpense: 0,
    deliveryExpense: 0
  }
};

export default () =>
  createStore(
    rootReducer,
    initialState,
    compose(
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
