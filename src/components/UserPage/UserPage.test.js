import React from 'react';
import { shallow } from 'enzyme';
import { UserPage } from './UserPage';

describe('Компонента UserPage', () => {

  describe('render', () => {
    const userData = {
      login: 'test-login',
      avatar_url: 'test-avatar',
      followers: 50
    };
    const wrapper = shallow(
    <UserPage 
      match={{ params: {} }}
      isFetching={false}
      userData={userData}
      fetchTokenOwnerRequest={jest.fn()}
      fetchUserRequest={jest.fn()}
    />);

    it('содержит login пользователя', () => {
      expect(wrapper.find('.user__login').text()).toEqual('test-login');
    });

    it('содержит аватар пользователя', () => {
      expect(wrapper.find('.user__avatar').prop('src')).toEqual('test-avatar');
    });

    it('содержит количество followers пользователя', () => {
      expect(wrapper.find('.user__followers span').text()).toEqual('50');
    });

    it('содержит компонент Followers с передачей login через props', () => {
      expect(wrapper.find('Connect(Followers)').prop('login')).toEqual('test-login');
    });
    
    it('содержит сообщение об отсутствии пользователя, если isFetching === false && user == null', () => {
      wrapper.setProps({ userData: null });
      expect(wrapper.find('.user__notfound')).toHaveLength(1);
    });

    it('содержит спинер/лоадер если props.isFetching === true', () => {
      wrapper.setProps({ isFetching: true });
      wrapper.setProps({ userData: {} });
      expect(wrapper.find('.spinner')).toHaveLength(1);
    });
  });

  describe('Методы компоненты', () => {
    it('содержит метод componentDidUpdate', () => {
      const wrapper = shallow(
        <UserPage 
          match={{ params: {} }}
          isFetching={false}
          userData={{}}
          fetchTokenOwnerRequest={jest.fn()}
          fetchUserRequest={jest.fn()}
        />);
      expect(wrapper.instance().componentDidUpdate).toBeDefined();
    });
  });
});