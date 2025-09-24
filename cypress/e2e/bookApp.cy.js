describe('Log in/Log out tests', () => {
  beforeEach(() =>{
    cy
      .visit('/');
  });
  it('Valid log in', () => {
    cy
      .login('bropet@mail.ru', '123');
    cy
      .contains('Добро пожаловать bropet@mail.ru')
      .should('be.visible');
    cy
      .contains('Log out')
      .should('be.visible')
      .and('not.be.disabled');
  });
  it('Invalid log in', () => {
    cy
      .login(' ',' ');
    cy
      .get('#mail')
      .then(($element) => $element[0]
      .checkValidity()).should('be.false');
  });
  it('Log out', () => {
    cy
      .login('bropet@mail.ru', '123');
    cy
      .contains('Добро пожаловать bropet@mail.ru')
      .should('be.visible');
    cy
      .contains('Log out')
      .click();
    cy
      .contains('Log in')
      .should('be.visible');
  });
});

describe('Favorites page tests', () =>{
  beforeEach(() => {
    cy
      .visit('/');

  });
  it('Upload book',() => {
    cy
      .login('bropet@mail.ru', '123');
    cy
      .uploadBook('Если все кошки в мире исчезнут','Гэнки Кавамура');
    cy
      .contains('Если все кошки в мире исчезнут')
      .should('be.visible')
      .and('not.be.disabled');
  });
  it('Add book to favorites', () => {
    cy
      .login('test@test.com', 'test');
    cy
      .get("img[alt='Logo']").click();
    cy
      .contains('Если все кошки в мире исчезнут')
      .find('.btn')
      .contains('Add to favorite')
      .click();
    cy
      .contains('Delete from favorite')
      .should('be.visible')
      .and('not.be.disabled');
    
  });
  it('Upload book and add to favorite', () => {
    cy
      .login('bropet@mail.ru', '123');
    cy
      .uploadFavoriteBook('Башня тишины','Рагим Джафаров');
    cy
      .get('h4').click();
    cy
      .contains('Башня тишины')
      .find('.btn')
      .contains('Delete from favorite');
  });
});