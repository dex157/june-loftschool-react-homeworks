import React from 'react';
import {UserPage} from './UserPage';
import { shallow } from 'enzyme';

describe('Компонент UserPage', () => {
  const wrapper = shallow(
  <UserPage
    match={{ params: {} }}
    isFetching={false}
    fetchUserRequest={jest.fn()}
    fetchTokenOwnerRequest={jest.fn()}
    user={null}
/>);
  it('Содержит метод componentDidUpdate', () => {
    expect(wrapper.instance().componentDidUpdate).toBeDefined();
  });
  it('Содержит спинер/лоадер если props.isFetching === true', () => {
    wrapper.setProps({ isFetching: true });
    expect(wrapper.find('.spinner')).toHaveLength(1);
  });
  it('Наличие сообщения об отсутствии пользователя если isFetching === false && user == null,', () => {
    wrapper.setProps({ user: null });
    wrapper.setProps({ isFetching: false });
    expect(wrapper.find('.user__none')).toHaveLength(1);
  });
});

  describe('Компонент UserPage', () => {
    const wrapper = shallow(
    <UserPage
      match={{ params: {} }}
      isFetching={false}
      fetchUserRequest={jest.fn()}
      fetchTokenOwnerRequest={jest.fn()}
      user= { 
        {
        name: 'AntonLantukh',
        url: 'Test',
        followersCount: 100,
        reposCount: 200
    } }
  />);
  
  it('Аватар присутствует в верстке', () => {
    expect(wrapper.find('.user__image').prop('src')).toEqual('Test');
  })

  it('Login присутствует в верстке', () => {
    expect(wrapper.find('.user__name').text()).toEqual('AntonLantukh');
  })

  it('Количество фаловеров пользователя присутствует в верстке', () => {
    expect(wrapper.find('.user__followers').text()).toEqual('Followers: 100')
  })

  it('Компонент Followers с передачей login через props присутствует в верстке', () => {
    expect(wrapper.find('Connect(Followers)').prop('login')).toEqual('AntonLantukh')
  })
});