import React from 'react';
import {shallow} from 'enzyme';

import {AppRouter} from './AppRouter';

describe('Для компоненты AppRouter нужно написать тесты', () => {
   const wrapper = shallow(<AppRouter/>);

   it('Проверить наличие Switch', () => {
      expect(wrapper.find('Switch')).toHaveLength(1);
   });

   it('Проверить наличие компоненты <PrivateRoute path="/users/me" />', () => {
      expect(wrapper.find('PrivateRoute').filterWhere((item) => {
         return item.prop('path') === "/users/me";
      })).toHaveLength(1);
   });

   it('Проверить наличие компоненты <PrivateRoute path="/users/:name" />', () => {
      expect(wrapper.find('PrivateRoute').filterWhere((item) => {
         return item.prop('path') === "/users/:name";
      })).toHaveLength(1);
   });

   it('Проверить наличие компоненты <Route path="/login" />', () => {
      expect(wrapper.find('Route[path="/login"]')).toHaveLength(1);
   })
});