import { MOVE_ORDER_TO_CUSTOMER, ADD_ORDER_TO_FARM } from './farmTypes';

export const moveOrderToCustomer = id => {
  return {
    type: MOVE_ORDER_TO_CUSTOMER,
    payload: id
  };
};

export const addOrderToFarm = (id, name, price, createdAt) => {
  return {
    type: ADD_ORDER_TO_FARM,
    payload: {
      id,
      name,
      price,
      createdAt
    }
  };
};
