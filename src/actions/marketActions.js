import {
  CREATE_ORDER,
  DELETE_ORDER_FROM_MARKET
} from './marketTypes';

export const createOrder = (id, name, price, createdAt) => {
  return {
    type: CREATE_ORDER,
    payload: {
      id,
      name,
      price,
      createdAt
    }
  };
};

export const deleteOrderFromMarket = (id) => {
  return {
    type: DELETE_ORDER_FROM_MARKET,
    payload: id
  };
};
