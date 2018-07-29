import { call, put, select } from 'redux-saga/effects'
import request from '../../sagas/request'
import {
  getIsNetworkErrorPresent,
  clearNetworkErrors,
  networkError
} from '.'
import { logout } from '../auth-actions'

describe('Тест редьюсера request', () => {

  describe('Happy path', () => {
    const func = jest.fn();
    const iterator = request(func, 123, 456);

    it('Провека факта вызова метода', () => {
      expect(iterator.next().value).toEqual(call(func, 123, 456))
    });

    it('Проверка наличия (селектора) ошибки', () => {
      expect(iterator.next().value).toEqual(select(getIsNetworkErrorPresent))
    });

    it('Провека факта вызова очистки ошибок', () => {
      expect(iterator.next(true).value).toEqual(put(clearNetworkErrors()))
    });
  });

  describe('Unhappy path', () => {
    const func = jest.fn();
    const error = new Error('error');
    error.response = { status: 401, data: {} };
    const iterator = request(func, 123, 456);

    it('Ловит и передает в экшн networkError ошибку', () => {
      iterator.next();

      function extractActionType(complexObject) {
          return complexObject.PUT.action.type;
      }

      expect(extractActionType(iterator.throw(error).value)).toEqual(
        extractActionType(put(networkError(error.toString())))
      )

    });

    it('Провека факта вызова logout() при получении кода 401', () => {
      expect(iterator.next().value).toEqual(put(logout()))
    })
  })
});