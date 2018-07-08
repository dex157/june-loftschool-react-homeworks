import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = orderPayload => ({
  type: CREATE_ORDER,
  payload: orderPayload
});

export const moveOrderToFarm = orderPayload => ({
  type: MOVE_ORDER_TO_FARM,
  payload: orderPayload
});
