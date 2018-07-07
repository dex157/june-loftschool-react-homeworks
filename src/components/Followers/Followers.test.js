import React from 'react'
import { shallow } from 'enzyme'
import { Followers } from './Followers'

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

const wrapper = shallow(
  <Followers
    login="user"
    followers={followers}
    isFetching={true}
    fetchFollowersRequest={jest.fn()}
  />
)

describe('Компонент UserPage', () => {
  describe('Поведение', () => {
    it('Содержит метод componentDidMount', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined()
    })

    it('Содержит Spinner если props.isFetching === true', () => {
      expect(wrapper.find('i')).toHaveLength(1)
    })

    it('Рендерит кол-во фолловеров равное переданному в props.followers', () => {
      wrapper.setProps({ isFetching: false })
      expect(wrapper.find('Link')).toHaveLength(followers.length)
    })

    it('Link на фолловера содержит правильный путь', () => {
      expect(
        wrapper
          .find('Link')
          .first()
          .prop('to')
      ).toBe(`/users/${followers[0].name}`)
    })
  })
})
