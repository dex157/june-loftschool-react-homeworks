import reducer, {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './index'

const initialState = {
  data: null,
  fetched: false,
  error: null
}

describe('Редьюсер Users', () => {
  it('Возвращает изначальное состояние', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('Экшн fetchUserRequest', () => {
    const action = fetchUserRequest()

    it('Очищает поле `data`', () => {
      expect(reducer({ data: {}, fetched: false }, action)).toMatchObject({
        data: null
      })
    })

    it('Очищает поле `error`', () => {
      expect(reducer({ error: true }, action)).toMatchObject({ error: null })
    })
  })

  describe('Экшн fetchUserSuccess', () => {
    const action = fetchUserSuccess({ name: 'test' })

    it('Изменяет флаг `isFetched`', () => {
      expect(reducer(initialState, action)).toMatchObject({
        fetched: true
      })
    })

    it('Наполняет поле `data`', () => {
      expect(reducer(initialState, action)).toMatchObject({
        data: { name: 'test' }
      })
    })

    it('Очищает поле `error`', () => {
      expect(reducer({ error: true }, action)).toMatchObject({ error: null })
    })
  })

  describe('Экшн fetchUserFailure', () => {
    const action = fetchUserFailure('error')

    it('Изменяет флаг `isFetched`', () => {
      expect(reducer(initialState, action)).toMatchObject({
        fetched: true
      })
    })

    it('Наполняет поле `error`', () => {
      expect(reducer(initialState, action)).toMatchObject({ error: 'error' })
    })
  })
})
