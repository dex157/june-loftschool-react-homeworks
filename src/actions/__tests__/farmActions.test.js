import { moveOrderToCustomer } from '../farmActions';

describe('Action creator moveOrderToCustomer', () => {
  it("Должен возвращать правильный action c типом 'MOVE_ORDER_TO_CUSTOMER'", () => {
    expect(moveOrderToCustomer('test')).toEqual({
      type: 'MOVE_ORDER_TO_CUSTOMER',
      payload: 'test',
    });
  });
});
