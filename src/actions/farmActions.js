import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = payload => {
  return {
    type: MOVE_ORDER_TO_CUSTOMER,
    payload
  };
};
