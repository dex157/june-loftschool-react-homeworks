describe('Домашняя работа', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Верстка', () => {
    it('Присутствует тег nav', () => {
      cy.get('nav');
    });
    it('Присутствует ссылка «Войти» на /login', () => {
      cy
        .get('a')
        .contains('Войти')
        .should('have.attr', 'href', '/login');
    });
    it('Присутствует ссылка «Секретная страница» на /private', () => {
      cy
        .get('a')
        .contains('Секретная страница')
        .should('have.attr', 'href', '/private');
    });
    it('Присутствует ссылка «Главная» на /', () => {
      cy
        .get('a')
        .contains('Главная')
        .should('have.attr', 'href', '/');
    });
  });

  describe('Сценарий входа', () => {
    it('Приватная страница должна редиректить на страницу /login', () => {
      cy.visit('/private');

      cy.location().should(location => {
        expect(location.pathname).to.eq('/login')
      })
    })
    it('После ввода логина и пароля должен на странице /login предиректит на /', () => {
      cy.visit('/login');

      cy.get('input[name="email"]').type('student');
      cy.get('input[name="password"]').type('123');
      cy.get('button').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/')
      })
    })
    it('После ввода логина и неверного пароля должен появится тег p.error', () => {
      cy.visit('/login');

      cy.get('input[name="email"]').type('student');
      cy.get('input[name="password"]').type('wrong password');
      cy.get('button').click();

      cy.get('p.error')
    })
    it('После ввода авторизации можно войти на private', () => {
      cy.visit('/login');

      cy.get('input[name="email"]').type('student');
      cy.get('input[name="password"]').type('123');
      cy.get('button').click();

      cy
        .get('a')
        .contains('Секретная страница')
        .click()

        cy.get('p').contains('Private page');
    })
  })
});
