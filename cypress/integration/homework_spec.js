describe('Домашняя работа', () => {
  before(() => {
    cy.visit('/');
  });
  describe('Верстка', () => {
    it('Присутствует input', () => {
      cy.get('input');
    });
    it('Присутствует кнопка найтм', () => {
      cy.get('button').contains('Найти');
    });
  });

  describe('Логика', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('При вводе текста и нажатию на кнопку появляется список сериалов', () => {
      cy.get('input').type('Rick');
      cy
        .get('button')
        .contains('Найти')
        .click();
    });
    it('Из поиска можно перейти на страницу сериала кликнув на заголовок', () => {
      cy.get('input').type('Rick and Morty');
      cy
        .get('button')
        .contains('Найти')
        .click();
      cy.get('.t-search-result .t-preview:first-child .t-link').click();
    });

    it('На странице шоу пристствует информация о касте шоу', () => {
      cy.get('input').type('Rick and Morty');
      cy
        .get('button')
        .contains('Найти')
        .click();
      cy.get('.t-search-result .t-preview:first-child .t-link').click();
      cy.get('.t-person p').contains('Justin Roiland');
    });
  });
});
