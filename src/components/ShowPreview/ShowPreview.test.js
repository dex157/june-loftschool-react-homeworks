import React from 'react';
import ShowPreview from './ShowPreview';
import { shallow } from 'enzyme';

describe('Компонент ShowPreview', () => {
  const wrapper = shallow(
    <ShowPreview {...{ image: 'test', name: 'test_name', id: '123', summary: '<p>Test</p>' }} />,
  );

  describe('Методы класса:', () => {
    describe('render', () => {
      it('Должен содержать имя фильма props', () => {
        expect(wrapper.contains('test_name')).toBeTruthy();
      });
      it('Если props.image == null не должно быть тега img', () => {
        const wrapper = shallow(
          <ShowPreview
            {...{ image: null, name: 'test_name', id: '123', summary: '<p>Test</p>' }}
          />,
        );

        expect(wrapper.find('img')).toHaveLength(0);
      });
    });
  });
});
