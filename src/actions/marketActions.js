import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = payload => {
  return {
    type: CREATE_ORDER,
    payload
  };
};

export const moveOrderToFarm = payload => {
  return {
    type: MOVE_ORDER_TO_FARM,
    payload
  };
};
