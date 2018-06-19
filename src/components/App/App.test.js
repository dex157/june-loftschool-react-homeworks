import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

describe('Домашнее задание', () => {
  describe('Рендер компоненты App', () => {
    it('содержит div с классом App', () => {
      expect(wrapper.find('div.App')).toHaveLength(1);
    });

    it('div содержит p с классом description', () => {
      expect(wrapper.find('div.App p.description')).toHaveLength(1);
    });

    it('p.description содержит текст: Миру-мир, студентам - beer.', () => {
      expect(wrapper.find('div.App p').text()).toEqual(
        'Миру-мир, студентам - beer.'
      );
    });
  });
});
