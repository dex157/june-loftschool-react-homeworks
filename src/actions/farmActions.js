import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = order => ({
  type: MOVE_ORDER_TO_CUSTOMER,
  payload: order
});
