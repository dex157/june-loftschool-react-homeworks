import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

const createOrder = object => {
  return {
    type: CREATE_ORDER,
    payload: object
  };
};

const moveOrderToFarm = object => {
  return {
    type: MOVE_ORDER_TO_FARM,
    payload: object
  };
};

export { createOrder, moveOrderToFarm };
