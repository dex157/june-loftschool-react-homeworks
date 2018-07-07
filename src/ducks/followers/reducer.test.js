import reducer, {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './index'

const initialState = {
  data: null,
  fetching: false,
  error: null
}

const followers = [
  {
    id: 1,
    name: 'user1',
    avatar: 'http://test1.ru'
  },
  {
    id: 2,
    name: 'user2',
    avatar: 'http://test2.ru'
  }
]

describe('Редьюсер Followers', () => {
  it('Возвращает изначальное состояние', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('Экшн fetchFollowersRequest', () => {
    const action = fetchFollowersRequest()

    it('Изменяет флаг `isFetching`', () => {
      expect(reducer(initialState, action)).toMatchObject({
        fetching: true
      })
    })

    it('Очищает поле `data`', () => {
      expect(reducer({ data: [], fetching: false }, action)).toMatchObject({
        data: null
      })
    })

    it('Очищает поле `error`', () => {
      expect(reducer({ error: true }, action)).toMatchObject({ error: null })
    })
  })

  describe('Экшн fetchFollowersSuccess', () => {
    const action = fetchFollowersSuccess(followers)

    it('Изменяет флаг `isFetching`', () => {
      expect(reducer({ fetching: true }, action)).toMatchObject({
        fetching: false
      })
    })

    it('Наполняет поле `data`', () => {
      expect(reducer(initialState, action)).toMatchObject({
        data: followers
      })
    })

    it('Очищает поле `error`', () => {
      expect(reducer({ error: true }, action)).toMatchObject({ error: null })
    })
  })

  describe('Экшн fetchFollowersFailure', () => {
    const action = fetchFollowersFailure('error')

    it('Изменяет флаг `isFetching`', () => {
      expect(reducer({ fetching: true }, action)).toMatchObject({
        fetching: false
      })
    })

    it('Наполняет поле `error`', () => {
      expect(reducer(initialState, action)).toMatchObject({ error: 'error' })
    })
  })
})
