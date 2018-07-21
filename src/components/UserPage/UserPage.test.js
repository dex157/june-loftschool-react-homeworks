import React from 'react';
import {shallow} from 'enzyme';

import {UserPage} from './UserPage';

describe('Написать тесты для компоненты UserPage', () => {
   const wrapper = shallow(<UserPage userRequest={jest.fn()}
                                     isFetching={false}
                                     data={null}
                                     match={{params: {name: 'name'}}}
                                     location={{pathname: 'pathname'}}/>);

   it('Проверить наличие метода componentDidUpdate', () => {
      expect(wrapper.instance().componentDidUpdate).toBeDefined();
   });

   it('Проверить наличие спинера/лоадера если props.isFetching === true', () => {
      wrapper.setProps({isFetching: true});
      expect(wrapper.find('.Spinner')).toHaveLength(1);
   });

   it('Проверить наличие сообщения об отсутствии пользователя если isFetching === false && user == null', () => {
      wrapper.setProps({isFetching: false});
      expect(wrapper.find('.sc-notification.notification').text()).toEqual('Данные отсутствуют.')
   });

   it('В основной верстке должен быть аватар пользователя', () => {
      wrapper.setProps({
         data: {
            login: "maxim1989",
            avatar_url: "https://avatars2.githubusercontent.com/u/6304900?v=4",
            followers: 1,
            public_repos: 18
         }
      });
      expect(wrapper.find('img[src="https://avatars2.githubusercontent.com/u/6304900?v=4"]')).toBeTruthy();
   });

   it('В основной верстке должен быть login пользователя', () => {
      expect(wrapper.find('h3').text()).toEqual('maxim1989');
   });

   it('В основной верстке должно быть количество фаловеров пользователя', () => {
      expect(wrapper.find('p').filterWhere((item) => {
         return item.text().indexOf('Followers: 1') >= 0;
      })).toHaveLength(1);
   });

   it('В основной верстке должен быть компонент Followers с передачей login через props', () => {
      expect(wrapper.find('.Followers')).toHaveLength(1);
   })

});