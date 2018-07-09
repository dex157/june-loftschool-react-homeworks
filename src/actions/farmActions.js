import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = value => ({
  type: MOVE_ORDER_TO_CUSTOMER,
  payload: value
});
