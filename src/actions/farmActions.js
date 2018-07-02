import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

const moveOrderToCustomer = object => {
  return {
    type: MOVE_ORDER_TO_CUSTOMER,
    payload: object
  };
};

export { moveOrderToCustomer };
