import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
} from '../../actions/marketTypes';
import market from '../market';

describe('reducer market', () => {
  it('экшен с типом CREATE_ORDER добавляет action.payload к orders', () => {
    const next = market(undefined, {
      type: CREATE_ORDER,
      payload: { id: 1 },
    });

    expect([{ id: 1 }]).toEqual(expect.arrayContaining(next.orders));
  });

  it('экшен с типом MOVE_ORDER_TO_FARM удаляет из orders по action.payload.id', () => {
    const next = market(
      { orders: [{ id: 1 }] },
      { type: MOVE_ORDER_TO_FARM, payload: { id: 1 } },
    );

    expect(next.orders).toEqual([]);
  });
});
