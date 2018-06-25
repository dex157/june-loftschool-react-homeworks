import React from 'react';
import ModalButton from './ModalButton';
import Modal from './Modal';
import {shallow} from 'enzyme';

describe('Компонент ModalButton', () => {
  const wrapper = shallow(<ModalButton />);

  describe('state', () => {
    it('По-умолчанию содержит isModalShow = false', () => {
      expect(wrapper.state().isModalShow).toEqual(false);
    });
  });

  describe('Методы класса', () => {
    describe('hideModal', () => {
      it('Присутствует', () => {
        expect(wrapper.instance().hideModal).toBeDefined();
      });

      it('При вызове устанавливает state.isModalShow = false', () => {
        wrapper.setState({isModalShow: true});
        wrapper.instance().hideModal();
        wrapper.update();
        expect(wrapper.state().isModalShow).toBeFalsy();
      });
    });
    describe('showModal', () => {
      it('Присутствует', () => {
        expect(wrapper.instance().showModal).toBeDefined();
      });
      it('При вызове устанавливает state.isModalShow = true', () => {
        wrapper.setState({isModalShow: false});
        wrapper.instance().showModal();
        wrapper.update();
        expect(wrapper.state().isModalShow).toBeTruthy();
      });
    });
    describe('render', () => {
      it('Если state.isModalShow = true показывает компонент Modal', () => {
        wrapper.setState({isModalShow: true});
        wrapper.update();

        expect(wrapper.find(Modal)).toHaveLength(1);
      });
    });
  });
});
