import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = id => {
  return {
    type: MOVE_ORDER_TO_CUSTOMER,
    payload: id
  };
};
