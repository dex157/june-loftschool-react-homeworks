import budget from '../budget';
import { MOVE_ORDER_TO_CUSTOMER } from '../../actions/farmTypes';
import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
} from '../../actions/marketTypes';

describe('reducer budget', () => {
  it('экшен с типом MOVE_ORDER_TO_CUSTOMER увеличивает deliveryExpanse на 20', () => {
    const next = budget(undefined, {
      type: MOVE_ORDER_TO_CUSTOMER,
    });
    expect(next.deliveryExpanse).toEqual(20);
  });

  it('экшен с типом CREATE_ORDER увеличивает profit на action.payload.price', () => {
    const next = budget(undefined, {
      type: CREATE_ORDER,
      payload: { price: 111 },
    });
    expect(next.profit).toEqual(111);
  });

  it('экшен с типом MOVE_ORDER_TO_FARM увеличивает farmExpanse на 100', () => {
    const next = budget(undefined, {
      type: MOVE_ORDER_TO_FARM,
    });
    expect(next.farmExpanse).toEqual(100);
  });
});
