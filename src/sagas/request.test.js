import request from './request'
import { call, put, select } from 'redux-saga/effects'
import {
  getIsNetworkErrorPresent,
  clearNetworkErrors,
  networkError
} from 'ducks/network'
import { logout } from 'ducks/auth'

describe('Сага request', () => {
  describe('Сценарий успешного выполнения', () => {
    const func = jest.fn()
    const iterator = request(func, 1, 2)

    it('Вызывает переданную функцию с переданнами аргументами', () => {
      expect(iterator.next().value).toEqual(call(func, 1, 2))
    })

    it('Проверяет наличии ошибки', () => {
      expect(iterator.next().value).toEqual(select(getIsNetworkErrorPresent))
    })

    it('Вызывает очистку ошибок при наличии ошибки', () => {
      expect(iterator.next(true).value).toEqual(put(clearNetworkErrors()))
    })
  })

  describe('Сценарий ошибки', () => {
    const func = jest.fn()
    const error = new Error('error')
    error.response = { status: 401, data: {} }
    const iterator = request(func, 1, 2)

    it('Ловит и передает в экшн networkError ошибку', () => {
      iterator.next()

      expect(iterator.throw(error).value).toEqual(
        put(networkError(error.toString()))
      )
    })

    it('Вызывает logout при получении кода 401', () => {
      expect(iterator.next().value).toEqual(put(logout()))
    })
  })
})
