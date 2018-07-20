import React from 'react';
import Spinner from 'react-svg-spinner';
import UserPage from './UserPage';
import { shallow } from 'enzyme';
import Followers from "../Followers";

const mockUsers = {
  isFetching: false,
  isFetched: false,
  data: { avatar_url: '/avatar.png', login: 'avatar', followers: 3, public_repos: 9 },
  error: null
};
const mockParams = { name: null };
const mockFetchUserRequest = jest.fn();

describe('Компонент <UserPage />', () => {
  const wrapper = shallow(
    <UserPage
      users={mockUsers}
      params={mockParams}
      fetchUserRequest={mockFetchUserRequest}
    />
  );

  it('Наличие componentDidUpdate()', () => {
    expect(wrapper.instance().componentDidUpdate).toBeDefined();
  });

  it('Наличие <Spinner>, если isFetched === false', () => {
    expect(
      wrapper.contains(<Spinner size="64px" color="fuchsia" gap={5} />)
    ).toBeTruthy();
  });

  describe('Наличие профиля пользователя', () => {
    const data = wrapper.instance().props.users.data;

    beforeEach(() => {
      wrapper.setProps({ users: { ...mockUsers, isFetched: true } });
    });

    it('Наличие аватара', () => {
      expect(
        wrapper.contains(<img src={data.avatar_url} alt={data.login} />)
      ).toBeTruthy();
    });

    it('Наличие логина', () => {
      expect(wrapper.contains(<h3>{data.login}</h3>)).toBeTruthy();
    });

    it('Наличие фоловеров', () => {
      expect(wrapper.contains(<p>Followers: {data.followers}</p>)).toBeTruthy();
    });

    it('Наличие компонента <Followers login="">', () => {
      expect(wrapper.contains(<Followers login={data.login} />)).toBeTruthy();
    });
  });
});
