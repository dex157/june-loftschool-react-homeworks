import farm from '../farm';
import { MOVE_ORDER_TO_FARM } from '../../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../../actions/farmTypes';

describe('reducer farm', () => {
  it('экшен с типом MOVE_ORDER_TO_FARM добавляет action.payload к orders', () => {
    const next = farm(undefined, {
      type: MOVE_ORDER_TO_FARM,
      payload: { name: 'test' },
    });
    expect([{ name: 'test' }]).toEqual(
      expect.arrayContaining(next.orders),
    );
  });
  it('экшен с типом MOVE_ORDER_TO_CUSTOMER уберает order из orders, поиск по id', () => {
    const next = farm(
      { orders: [{ id: 1 }] },
      { type: MOVE_ORDER_TO_CUSTOMER, payload: { id: 1 } },
    );
    expect(next.orders).toEqual([]);
  });
});
