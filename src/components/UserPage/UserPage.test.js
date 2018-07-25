import { shallow } from 'enzyme';
import { UserPage } from './UserPage';
import React from 'react';
import Spinner from 'react-svg-spinner';

describe('Методы компоненты UserPage -> ', () => {
  const wrapper = shallow(
    <UserPage
      match={{ params: {} }}
      isFetched={true}
      user={{}}
      fetchTokenOwnerRequest={jest.fn()}
    />
  );

  it('содержит componentDidUpdate', () => {
    expect(wrapper.instance().componentDidUpdate).toBeDefined();
  });
});

describe('Компонента UserPage render ->', () => {
  const wrapper = shallow(
    <UserPage
      match={{ params: {} }}
      isFetched={true}
      user={{}}
      fetchTokenOwnerRequest={jest.fn()}
    />
  );
  it('наличие спинера/лоадера если isFetching === true', () => {
    wrapper.setProps({ isFetching: true });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
  it('наличие сообщения об отсутствии пользователя если isFetching === false && user == null,', () => {
    wrapper.setProps({ isFetching: false, user: null });
    expect(wrapper.find('.user_not_found')).toHaveLength(1);
  });
});

describe('Верстка UserPage -> ', () => {
  const wrapper = shallow(
    <UserPage
      match={{ params: {} }}
      isFetched={true}
      user={{}}
      fetchTokenOwnerRequest={jest.fn()}
    />
  );
  it('аватар пользователя', () => {
    expect(wrapper.find('.avatar')).toHaveLength(1);
  });
  it('login пользователя', () => {
    expect(wrapper.find('.login')).toHaveLength(1);
  });
  it('количество фаловеров пользователя', () => {
    expect(wrapper.find('.p_followers')).toHaveLength(1);
  });
  it('компонент Followers с передачей login через props', () => {
    expect(wrapper.find('.wrap_followers').props('login')).toBeTruthy();
  });
});
