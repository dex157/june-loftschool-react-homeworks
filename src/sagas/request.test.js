import { call, put, select } from 'redux-saga/effects';
import {
  getIsNetworkErrorPresent,
  clearNetworkError,
  networkError
} from '../ducks/network';
import { logout } from '../ducks/auth';
import requestFlow from './request';

describe('Сага request', () => {
  const fn = jest.fn();

  describe('возвращает результат сетевого запроса без ошибок', () => {
    const iterator = requestFlow(fn, 1, 2);

    it('вызывает функцию fn сетевого запроса с аргументами', () => {
      expect(iterator.next().value).toEqual(
        call(fn, 1, 2)
      );
    });
  
    it('получает срез state о наличии сетевой ошибки', () => {
      expect(iterator.next().value).toEqual(
        select(getIsNetworkErrorPresent)
      );
    });
   
    it('при наличии сетевой ошибки очищает network.error', () => {
      expect(iterator.next(true).value).toEqual(
        put(clearNetworkError())
      );
    });
  
    it('возвращает результат сетевого запроса - response', () => {
      expect(iterator.next().done).toBeTruthy();
    });
  });

  describe('возвращает результат сетевого запроса с ошибокой', () => {
    const testError = {message: 'test-error', response: { status: 401}};
    const iterator = requestFlow(fn, 1, 2);
    iterator.next();

    it('отправляет экшн networkError для записи сетевой ошибки', () => {
      expect(iterator.throw(testError).value).toEqual(
        put(networkError(testError))
      );
    });

    it('если сетевая ошибка 401, то отправляет экшн logout', () => {
      if (testError.status === 401) {
        expect(iterator.next().value).toEqual(put(logout()));
      };
    });
  });
});