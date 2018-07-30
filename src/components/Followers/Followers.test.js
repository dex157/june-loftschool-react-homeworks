import React from 'react';
import { shallow } from 'enzyme';
import { Followers } from './Followers';

const followers = [
  {
    name: 'user1',
    avatar: 'img1'
  },
  {
    name: 'user2',
    avatar: 'img2'
  }
];

const wrapper = shallow(
  <Followers
    login="user"
    followers={followers}
    isFetching={false}
    fetchFollowersRequest={jest.fn()}
  />
);

describe('Компонент Followers', () => {
  it('Содержит метод componentDidMount', () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it('Содержит Spinner если props.isFetching === true', () => {
    wrapper.setProps({ isFetching: true });
    expect(wrapper.find('.spinner')).toHaveLength(1);
  });

  it('Рендерит кол-во фолловеров равное переданному в props.followers', () => {
    wrapper.setProps({ isFetching: false });
    expect(wrapper.find('Follower')).toHaveLength(followers.length);
  });
});
