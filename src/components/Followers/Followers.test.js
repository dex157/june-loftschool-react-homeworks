import React from 'react';
import Spinner from 'react-svg-spinner';
import { shallow } from 'enzyme/build/index';
import Followers from './Followers';

const mockFetchFollowersRequest = jest.fn();
const mockFollowers = {
  isFetching: false,
  isFetched: false,
  ids: [],
  error: null
};

describe('Компонент <Followers />', () => {
  const wrapper = shallow(
    <Followers
      followers={mockFollowers}
      fetchFollowersRequest={mockFetchFollowersRequest}
    />
  );

  it('Наличие componentDidMount()', () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it('Наличие <Spinner>, если isFetched === false', () => {
    expect(
      wrapper.contains(<Spinner size="64px" color="fuchsia" gap={5} />)
    ).toBeTruthy();
  });

  it('Кол-во <Follower /> === props.followers', () => {
    wrapper.setProps({
      followers: {
        ...mockFollowers,
        isFetched: true,
        ids: [
          { id: 1, login: '1', avatar_url: '1.jpg' },
          { id: 2, login: '2', avatar_url: '2.jpg' },
          { id: 3, login: '3', avatar_url: '3.jpg' },
          { id: 4, login: '4', avatar_url: '4.jpg' }
        ]
      }
    });
    const ids = wrapper.instance().props.followers.ids;

    expect(wrapper.find('Follower')).toHaveLength(ids.length);
  });
});
