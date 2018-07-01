import React, { Component, Fragment } from 'react';
import './ModalButton.css';
import Modal from './Modal';

class ModalButton extends Component {
  //компонент ModalButton, который выводит кнопку,
  // при нажатии на которую появляется модальное окно,
  //которое должно быть отрендерено в #modal.
  //В модальном окне должна быть кнопка закрытия окна, при нажатии на которую окно закрывается.
  state = { isModalShow: false }; //значение isModalShow по умолчанию false, т.е. когда только открывается модальное окно закрыто

  hideModal = e => {
    this.setState({ isModalShow: false }); //при этом методе значение  isModalShow становится false
    //а когда значение false у нас не открывается  модальное окно/закрывается
  };
  showModal = e => {
    //при этом методе меняется значение isModalShow на true при котором появляется  <Modal>, т.е. открывается модальное окно
    this.setState({ isModalShow: true });
  };
  render() {
    const { isModalShow } = this.state; //передает значение

    return (
      <Fragment>
        <button onClick={this.showModal}>Show modal!</button>
        {isModalShow ? ( //если isModalShow =true, то выводится компанента <Modal>
          <Modal>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Модальное окно!</h1>
                  <button onClick={this.hideModal}>Close</button>
                  {/* внутри модального окна еще одна кнопка , при нажатии (onClick)
                  , сработает метод hideModal */}
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </Fragment>
    );
  }
}

export default ModalButton;
