import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = order => {
  return { type: CREATE_ORDER, payload: order };
};

export const moveOrderToFarm = order => {
  return { type: MOVE_ORDER_TO_FARM, payload: order };
};
