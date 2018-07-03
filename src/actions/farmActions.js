import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = orderPayload => ({
  type: MOVE_ORDER_TO_CUSTOMER,
  payload: orderPayload
});
