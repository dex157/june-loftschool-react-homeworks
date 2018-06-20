import React from 'react';
import Message from './Message';
import { shallow } from 'enzyme';

describe('Компонент Message', () => {
  describe('render', () => {
    const wrapper = shallow(<Message text={'test'} />);
    it('Содержит span с классом message', () => {
      expect(wrapper.find('span.message')).toHaveLength(1);
    });
    it('В span текст переданный через props.text', () => {
      expect(wrapper.find('span').contains('test')).toBeTruthy();
    });
  });
});
