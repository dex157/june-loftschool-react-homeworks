import React from 'react';
import Switcher from '../Switcher';
import {shallow} from 'enzyme';

describe('Компонент Switcher', () => {
  const A = () => <div />;
  A.displayName = 'A_test';
  const BComponent = () => <div />;

  const wrapper = shallow(
    <Switcher>
      <A />
      <BComponent />
    </Switcher>
  );

  wrapper.update();

  describe('state', () => {
    it('По-умолчанию state содержит ключ selectedChild = 0', () => {
      expect(wrapper.state().selectedChild).toBeDefined();
      expect(wrapper.state().selectedChild).toEqual(0);
    });
  });
  it('Рендерит только одного ребенка', () => {
    expect(wrapper.find(A)).toHaveLength(1);
  });

  it('Не рендерит второго ребенка если state.selectedChild == 0', () => {
    expect(wrapper.find(BComponent)).toHaveLength(0);
  });

  it('Рендерит второго ребенка если state.selectedChild == 1', () => {
    wrapper.setState({selectedChild: 1});
    wrapper.update();

    expect(wrapper.find(BComponent)).toHaveLength(1);
  });

  it('Рендерит список имен детей, если есть child.displayName показывает displayName, если нет — child.name ', () => {
    expect(wrapper.contains('A_test')).toBeTruthy();
    expect(wrapper.contains('BComponent')).toBeTruthy();
  });
  describe('render', () => {
    describe('Тэг .component-list__name', () => {
      it('Содержит имена компонент', () => {
        expect(
          wrapper
            .find('.component-list__name')
            .at(0)
            .contains('A_test')
        ).toBeTruthy();
        expect(
          wrapper
            .find('.component-list__name')
            .at(1)
            .contains('BComponent')
        ).toBeTruthy();
      });
      it('Содержит data атрибут data-id с индексом ребенка', () => {
        expect(wrapper.find('.component-list__name')).toHaveLength(2);
        expect(
          wrapper
            .find('.component-list__name')
            .at(0)
            .props()['data-id']
        ).toEqual(0);
        expect(
          wrapper
            .find('.component-list__name')
            .at(1)
            .props()['data-id']
        ).toEqual(1);
      });
      it('Содержит атрибут onClick при клике вызвается handleChangeChild', () => {
        expect(wrapper.find('.component-list__name')).toHaveLength(2);
        expect(
          wrapper
            .find('.component-list__name')
            .at(0)
            .props()['onClick']
        ).toEqual(wrapper.instance().handleChangeChild);
        expect(
          wrapper
            .find('.component-list__name')
            .at(1)
            .props()['onClick']
        ).toEqual(wrapper.instance().handleChangeChild);
      });
    });
  });
});
