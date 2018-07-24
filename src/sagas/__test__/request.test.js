import { call, put } from 'redux-saga/effects';
import { networkError } from '../../ducks/network';
import requestFlow from '../request';

const mockFn = jest.fn();
const mockArgs = {};

describe('Сага request', () => {
  const iterator = requestFlow(mockFn, mockArgs);

  it('Наличие отправки запроса', () => {
    expect(iterator.next().value).toEqual(call(mockFn, mockArgs));
  });

  it('Наличие ошибки', () => {
    expect(iterator.throw({ message: 'Not found' }).value).toEqual(
      put(networkError({ message: 'Not found' }))
    );
  });
});
