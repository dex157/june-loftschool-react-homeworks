import React from 'react';
import Follower from './Follower';
import { shallow } from 'enzyme';

describe('Компонент Follower', () => {
  const wrapper = shallow(
  <Follower
      name={"Test2"}
      url={'Test1'}
  />);

  it('Содержит аватар', () => {
    expect(wrapper.find('.follower__image').prop('src')).toEqual('Test1');
  });
  it('Содержит login пользователя, переданный через props', () => {
    wrapper.setProps({ isFetching: true });
    expect(wrapper.find('h3').text()).toEqual('Test2');
  });
  it('ссылка с логина пользователя ведет на /user/{user.login}', () => {
    expect(wrapper.find('Link').prop('to')).toEqual('/user/Test2');
  });
});