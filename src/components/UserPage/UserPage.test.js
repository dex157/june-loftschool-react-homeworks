import React from 'react';
import { shallow } from 'enzyme';
import { UserPage } from './UserPage';
import Loader from '../Loader';

const getShallowWrapper = () => {
  return shallow(
    <UserPage
      match={{ params: {} }}
      isFetching={false}
      user={{
        login: 'test-login',
        avatar_url: 'test-avatar',
        followers: 5
      }}
      getUserRequest={jest.fn()}
      getUserOwnerRequest={jest.fn()}
    />
  );
};

describe('Компонента UserPage', () => {
  it('Cодержит метод componentDidUpdate', () => {
    const wrapper = getShallowWrapper();
    expect(wrapper.instance().componentDidUpdate).toBeDefined();
  });

  it('Cодержит <Loader /> при props.isFetching === true', () => {
    const wrapper = getShallowWrapper();
    wrapper.setProps({ isFetching: true });
    expect(wrapper.containsMatchingElement(<Loader />)).toBeTruthy();
  });

  it('Cодержит сообщение об отсутствии пользователя если isFetching ===  false && user == null', () => {
    const wrapper = getShallowWrapper();
    wrapper.setProps({ user: null });
    expect(wrapper.find('.not-found')).toHaveLength(1);
  });

  describe('render', () => {
    const wrapper = getShallowWrapper();
    it('Cодержит аватар пользователя', () => {
      expect(wrapper.find('.user-img').prop('src')).toEqual('test-avatar');
    });

    it('Cодержит login пользователя', () => {
      expect(wrapper.find('.user-name').text()).toEqual('test-login');
    });

    it('Cодержит количество фоловеров пользователя', () => {
      expect(
        wrapper
          .find('.user-followers-count')
          .text()
          .split(' ')[1]
      ).toEqual('5');
    });

    it('Cодержит компонент Followers с передачей login через props', () => {
      expect(wrapper.find('Connect(Followers)').prop('login')).toEqual(
        'test-login'
      );
    });
  });
});
