describe('Домашняя работа', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Верстка', () => {
    describe('Верстка .market', () => {
      it('Присутствует тег .market', () => {
        cy.get('.market');
      });
      it('Присутствует тег .new-orders__create-button', () => {
        cy.get('.new-orders__create-button');
      });
      it('Присутствует тег button с текстом «Отправить заказ на ферму»', () => {
        cy.get('button').contains('Отправить заказ на ферму');
      });
    });

    describe('Верстка .farm', () => {
      it('Присутствует тег .farm', () => {
        cy.get('.farm');
      });

      it('Присутствует тег button с текстом «Отправить урожай клиенту»', () => {
        cy.get('button').contains('Отправить урожай клиенту');
      });
    });

    describe('Верстка .budget', () => {
      it('Присутствует тег .budget', () => {
        cy.get('.budget');
      });

      it('Присутствует тег p c текстом «Всего получено денег»', () => {
        cy.get('.budget p').contains('Всего получено денег');
      });
      it('Присутствует тег p c текстом «Расходы продавцов»', () => {
        cy.get('.budget p').contains('Расходы продавцов');
      });
      it('Присутствует тег p c текстом «Расходы на ферме»', () => {
        cy.get('.budget p').contains('Расходы на ферме');
      });
      it('Присутствует тег p c текстом «Расходы на доставку»', () => {
        cy.get('.budget p').contains('Расходы на доставку');
      });
      it('Присутствует тег p c текстом «Итого»', () => {
        cy.get('.budget p').contains('Итого');
      });
    });
    it('Присутствует тег .app', () => {
      cy.get('.app');
    });
  });

  describe('Сценарии', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('Создание заказа', () => {
      cy.get('.new-orders__create-button').click();
      cy.get('.market .order-list .order').should('have.length', 1);
    });
    it('Создание 3 заказов', () => {
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.market .order-list .order').should('have.length', 3);
    });
    it('Создание 1 заказа и перевод заказа на ферму', () => {
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy.get('.market .order-list .order').should('have.length', 0);
      cy.get('.farm .order').should('have.length', 1);
    });
    it('Создание 3 заказов и перевод их всех на ферму', () => {
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy.get('.market .order-list .order').should('have.length', 0);
      cy.get('.farm .order').should('have.length', 3);
    });

    it('Создание 1 заказа с отправкой клиенту', () => {
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить урожай клиенту')
        .click();
      cy.get('.farm .order').should('have.length', 0);
    });
    it('Создание 3 заказов с отправкой клиенту', () => {
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить урожай клиенту')
        .click();
      cy
        .get('button')
        .contains('Отправить урожай клиенту')
        .click();
      cy
        .get('button')
        .contains('Отправить урожай клиенту')
        .click();
      cy.get('.farm .order').should('have.length', 0);
    });
  });
  describe('Сценарий создания заказа в магазине', () => {
    before(() => {
      cy.get('.new-orders__create-button').click();
    });
    it('Сумма заказов отражается в строке «Всего получено денег»', () => {
      cy.get('.market .order-list .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-profit').then($el => {
          const profit = parseInt($el.text(), 10);
          expect(profit).to.eq(orderPrice);
        });
      });
    });
    it('Сумма заказов отражается в строке «Всего получено денег»', () => {
      cy.get('.market .order-list .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-profit').then($el => {
          const profit = parseInt($el.text(), 10);
          expect(profit).to.eq(orderPrice);
        });
      });
    });
    it('Расходы продавцов равны -20', () => {
      cy.get('.t-sellers').then($el => {
        const sellers = parseInt($el.text(), 10);
        expect(sellers).to.eq(-20);
      });
    });
    it('«Итого» равно стоимость заказа минус расходы продавцов', () => {
      cy.get('.market .order-list .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-total').then($el => {
          const total = parseInt($el.text(), 10);
          expect(total).to.eq(orderPrice - 20);
        });
      });
    });
  });
  describe('Сценарий отправки заказа на производство на ферму', () => {
    before(() => {
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
    });
    it('Сумма заказов отражается в строке «Всего получено денег»', () => {
      cy.get('.farm .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-profit').then($el => {
          const profit = parseInt($el.text(), 10);
          expect(profit).to.eq(orderPrice);
        });
      });
    });
    it('Сумма заказов отражается в строке «Всего получено денег»', () => {
      cy.get('.farm .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-profit').then($el => {
          const profit = parseInt($el.text(), 10);
          expect(profit).to.eq(orderPrice);
        });
      });
    });
    it('Расходы продавцов равны -20', () => {
      cy.get('.t-sellers').then($el => {
        const sellers = parseInt($el.text(), 10);
        expect(sellers).to.eq(-20);
      });
    });
    it('Расходы на ферме равны -100', () => {
      cy.get('.t-farm').then($el => {
        const sellers = parseInt($el.text(), 10);
        expect(sellers).to.eq(-100);
      });
    });
    it('«Итого» равно стоимость заказа минус расходы продавцов, минус ферма', () => {
      cy.get('.farm .order .order-price').then($el => {
        const orderPrice = parseInt($el.text(), 10);
        cy.get('.t-total').then($el => {
          const total = parseInt($el.text(), 10);
          expect(total).to.eq(orderPrice - 20 - 100);
        });
      });
    });
  });
  describe.only('Сценарий отправки заказа клиенту', () => {
    before(() => {
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy.get('.new-orders__create-button').click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить заказ на ферму')
        .click();
      cy
        .get('button')
        .contains('Отправить урожай клиенту')
        .click();
      cy
        .get('button')
        .contains('Отправить урожай клиенту')
        .click();
      cy
        .get('button')
        .contains('Отправить урожай клиенту')
        .click();
      cy
        .get('button')
        .contains('Отправить урожай клиенту')
        .click();
    });
    it('«Итого» = все деньги минус расходы', () => {
      cy.get('.t-total').then($el => {
        const total = parseInt($el.text(), 10);

        cy.get('.t-profit').then($el => {
          const profit = parseInt($el.text(), 10);

          cy.get('.t-sellers').then($el => {
            const sellers = parseInt($el.text(), 10);
            cy.get('.t-farm').then($el => {
              const farm = parseInt($el.text(), 10);
              cy.get('.t-delivery').then($el => {
                const delivery = parseInt($el.text(), 10);

                expect(total).to.eq(profit + sellers + farm + delivery);
              });
            });
          });
        });
      });
    });
  });
});
