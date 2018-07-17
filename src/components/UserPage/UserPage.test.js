import React from 'react'
import { shallow } from 'enzyme'
import { UserPage } from './UserPage'

const fn = jest.fn()
const wrapper = shallow(
  <UserPage
    match={{ params: {} }}
    isFetched={false}
    fetchSelfRequest={fn}
    fetchUserRequest={fn}
    user={null}
  />
)

describe('Компонент UserPage', () => {
  describe('Поведение', () => {
    it('Содержит метод componentDidUpdate', () => {
      expect(wrapper.instance().componentDidUpdate).toBeDefined()
    })

    it('Содержит Spinner если props.isFetched === false', () => {
      expect(wrapper.find('i')).toHaveLength(1)
    })

    it('Содержит сообщение об отсутствии пользователя если isFetched === true && user == null', () => {
      wrapper.setProps({ isFetched: true, user: null })

      expect(wrapper.contains('Пользователь не найден!')).toBeTruthy()
    })
  })

  describe('При наличии user содержит следующие элементы:', () => {
    beforeAll(() => {
      wrapper.setProps({
        idFetching: false,
        user: {
          name: 'TestUser',
          avatar: 'http://test.ru',
          followers: 2,
          repos: 3
        }
      })
    })

    it('Аватар', () => {
      expect(wrapper.find('img').prop('src')).toEqual('http://test.ru')
    })

    it('Логин пользователя', () => {
      expect(wrapper.contains('TestUser')).toBeTruthy()
    })

    it('Фолловеры', () => {
      expect(wrapper.find('[data-test-followers-count]').text()).toBe(
        'Followers: 2'
      )
    })

    it('Компонент <Followers /> c передачей login через props', () => {
      expect(wrapper.find('Connect(Followers)').prop('login')).toBe('TestUser')
    })
  })
})
