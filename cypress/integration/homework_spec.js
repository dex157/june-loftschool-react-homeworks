describe('Домашнее задание 3го занятия', function() {
  before(() => {
    cy.visit('/');
  });

  describe('Шаги формы', () => {
    it('На странице есть 3 шага формы с классом .step', () => {
      cy.get('body .step').should($steps => {
        expect($steps).to.have.length(3);
      });
    });

    it('На странице есть название формы с классом .title', () => {
      cy.get('body .title').should($title => {
        expect($title).to.have.length(1);
      });
    });
  });

  describe('Персональная информация', () => {
    it('Кнопка next имеет аттрибут disabled пока форма не заполнена правильно', () => {
      cy.get('.button-next').should('have.attr', 'disabled');
    });

    it('Если заполнить форму правильно, кнопку next можно нажать', () => {
      cy.get('[data-test="personal-form"] [name="firstName"]').type('Al');
      cy.get('[data-test="personal-form"] [name="lastName"]').type('Pacino');
      cy.get('[data-test="personal-form"] [name="email"]').type('al@pacino.com');
      cy.get('.button-next').should('not.have.attr', 'disabled');
    });
  });

  describe('Card info', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-test="personal-form"] [name="firstName"]').type('Al');
      cy.get('[data-test="personal-form"] [name="lastName"]').type('Pacino');
      cy.get('[data-test="personal-form"] [name="email"]').type('al@pacino.com');
      cy.get('.button-next').click({ force: true });
    });

    it('Кнопка next имеет аттрибут disabled пока не записано 16 цифр', () => {
      cy.get('.button-next').should('have.attr', 'disabled');
    });

    it('Если записать 16 цифр, кнопку next можно нажать', () => {
      cy.get('[data-test="card-form"] [name="cardNumber"]').type('1234123412341234');
      cy.get('.button-next').should('not.have.attr', 'disabled');
    });
  });

  describe('Congratulations', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-test="personal-form"] [name="firstName"]').type('Al');
      cy.get('[data-test="personal-form"] [name="lastName"]').type('Pacino');
      cy.get('[data-test="personal-form"] [name="email"]').type('al@pacino.com');
      cy.get('.button-next').click({ force: true });
      cy.get('[data-test="card-form"] [name="cardNumber"]').type('1234123412341234');
      cy.get('.button-next').click({ force: true });
    });

    it('Присутствует поздравление', () => {
      cy.get('[data-test="congratulations"]');
    });
  });
});
