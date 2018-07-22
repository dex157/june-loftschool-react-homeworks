import React from 'react';
import {shallow} from 'enzyme';

import {Followers} from './Followers';

describe('Написать тесты для компоненты Followers', () => {
   const wrapper = shallow(<Followers ids={[]} followersRequest={jest.fn()} isFetching={false}/>);

   it('Проверить наличие метода componentDidUpdate', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
   });

   it('Проверить наличие спинера/лоадера если props.isFetching === true', () => {
      wrapper.setProps({isFetching: true});
      expect(wrapper.find('.Spinner')).toHaveLength(1);
   });

   it('Проверить что возвращаются компоненты Followers в том количестве, в котором передаются в props.followers', () => {
      wrapper.setProps({
         isFetching: false, ids: [{
            id: 1,
            login: '1'
         }, {
            id: 2,
            login: '2'
         }]
      });
      expect(wrapper.find('.sc-follower')).toHaveLength(2);
   })

});