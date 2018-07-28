import React from 'react';
import { shallow } from 'enzyme';
import { Follower } from './Follower';

const getShallowWrapper = () => {
  return shallow(
    <Follower id={12} login={'test-login'} avatar_url={'test-avatar-url'} />
  );
};

describe('Компонента Follower', () => {
  it('Содержит аватар', () => {
    const wrapper = getShallowWrapper();
    expect(wrapper.find('.follower__avatar-img').prop('src')).toEqual(
      'test-avatar-url'
    );
  });

  it('Cодержит `login` пользователя, переданного через props', () => {
    const wrapper = getShallowWrapper();
    expect(wrapper.find('.follower__name').text()).toEqual('test-login');
  });

  it('Cсылка с логина пользователя ведет на `/users/{user.login}`', () => {
    const wrapper = getShallowWrapper();
    expect(wrapper.find('Link').prop('to')).toEqual('/users/test-login');
  });
});
