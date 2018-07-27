import React from 'react';
import { shallow } from 'enzyme';
import { UserPage } from './UserPage';

describe('UserPage', () => {

  describe('render', () => {
    const userData = {
      login: 'test-login',
      avatar_url: 'test-avatar',
      followers: 50
    };
    const wrapper = shallow(
    <UserPage
      match={{ params: {} }}
      isFetched={true}
      user={userData}
      fetchUserRequest={jest.fn()}
      fetchSelfRequest={jest.fn()}
    />);


    it('Contains avatar', () => {
      expect(wrapper.find('.user__avatar').prop('src')).toEqual('test-avatar');
    });

    it('Contains login', () => {
      expect(wrapper.find('.test-user-login').text()).toEqual('test-login');
    });

    it('Contains followers count', () => {
      expect(wrapper.find('.test-followers-count').text()).toEqual('Followers: 50');
    });

    it('Contains Followers component with login prop', () => {
      expect(wrapper.find('Connect(Followers)').prop('login')).toEqual('test-login');
    });

    it('Contains spinner if props.isFetching === true', () => {
      wrapper.setProps({ isFetched: false });
      wrapper.setProps({ user: {} });
      expect(wrapper.find('.spinner')).toHaveLength(1);
    });
  });

  describe('methods', () => {
    it('contains componentDidUpdate', () => {
      const wrapper = shallow(
        <UserPage
          match={{ params: {} }}
          isFetched={true}
          user={{}}
          fetchUserRequest={jest.fn()}
          fetchSelfRequest={jest.fn()}
        />);
      expect(wrapper.instance().componentDidUpdate).toBeDefined();
    });
  });
});
