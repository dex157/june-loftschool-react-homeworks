import React from 'react';
import Follower from './Follower';
import { shallow } from 'enzyme';

describe('Компонент Follower', () => {
  const wrapper = shallow(
  <Follower
      name={"follower"}
      url={'img'}
  />);

  it('Содержит аватар', () => {
    expect(wrapper.find('img').prop('src')).toEqual('img');
  });
  it('Содержит login пользователя, переданный через props', () => {
    expect(wrapper.find('h3').text()).toEqual('follower');
  });
  it('ссылка с логина пользователя ведет на /user/{user.login}', () => {
    expect(wrapper.find('Link').prop('to')).toEqual('/users/follower');
  });
});
