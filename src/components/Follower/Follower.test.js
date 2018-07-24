import React from 'react';
import { shallow } from 'enzyme/build/index';
import Follower from './Follower';

const mockLogin = 'test';
const mockAvatar = 'test.jpg';

describe('Компонент <Follower />', () => {
  const wrapper = shallow(<Follower login={mockLogin} avatar={mockAvatar} />);
  const props = wrapper.instance().props;

  it('Наличие аватара', () => {
    expect(
      wrapper.contains(
        <img className="follower-image" src={props.avatar} alt={props.login} />
      )
    ).toBeTruthy();
  });

  it('Наличие login пользователя переданного через props', () => {
    expect(props.login).toEqual(mockLogin);
  });

  it('Ссылка с логина пользователя ведет на /user/{user.login}', () => {
    expect(wrapper.find('Link').props().to).toBe(`/user/${mockLogin}`);
  });
});
