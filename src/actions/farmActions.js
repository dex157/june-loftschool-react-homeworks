import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = payload => ({
  type: MOVE_ORDER_TO_CUSTOMER,
  payload
});
