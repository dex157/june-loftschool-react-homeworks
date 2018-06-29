import { createOrder, moveOrderToFarm } from '../marketActions';

describe('Action creator createOrder', () => {
  it("Должен возвращать правильный action c типом 'CREATE_ORDER'", () => {
    expect(createOrder('test')).toEqual({
      type: 'CREATE_ORDER',
      payload: 'test',
    });
  });
});

describe('Action creator moveOrderToFarm', () => {
  it("Должен возвращать правильный action c типом 'MOVE_ORDER_TO_FARM'", () => {
    expect(moveOrderToFarm('test')).toEqual({
      type: 'MOVE_ORDER_TO_FARM',
      payload: 'test',
    });
  });
});
