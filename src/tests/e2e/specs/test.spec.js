describe('Visits the app root url', () => {
  it('homepage can be opened', () => {
    cy.visit('/');
    cy.contains('h2', "You won't forget anything ever again");
  });
});

describe('task list', () => {
  it('can see spinner on loading content', () => {
    cy.contains('Loading...');
  });

  it('can see spinner on loading content', () => {
    cy.wait(2000);
    cy.contains('0 of 0 tasks are completed');
  });

  it('can create new task', () => {
    const firstTaskText = 'My first task';

    cy.get('[id=addButton]').type(firstTaskText);

    const addButton = cy.get('.bg-green-500').contains('Add');
    addButton.click();

    cy.contains('0 of 1 tasks are completed');

    cy.get('.task > h4').contains(firstTaskText);
  });

  it("can edit a task's text", () => {
    const editedText = 'My first task text edited';

    cy.get('.task > h4').click();

    cy.get('.task > input').type(editedText).type('Cypress.io{enter}');

    cy.get('.task > h4').contains(editedText);
  });

  it('can edit a task\'s "completed" status', () => {
    cy.get('.task').should('have.class', 'border-white');

    const checkInput = cy.get('.task > [type="checkbox"]');
    checkInput.should('not.be.checked');
    checkInput.check();

    cy.get('.task').should('have.class', 'border-green-500');

    cy.contains('1 of 1 tasks are completed');
  });

  it("can delete a task's text", () => {
    cy.contains('1 of 1 tasks are completed');

    const deleteButton = cy.get('.task > button').contains('Remove');
    deleteButton.click();

    cy.contains('0 of 0 tasks are completed');
  });
});

describe('about page', () => {
  it('Should see about page', () => {
    const aboutLinkButton = cy.get('nav > a').last().contains('About');
    aboutLinkButton.click();

    cy.contains('This is an about page');
  });
});

describe('error page', () => {
  it('Should see error page on wrong path', () => {
    cy.visit('/asdf');
    cy.contains('Not found page');
  });

  it('can go back to home through link button', () => {
    const homeButton = cy.get('button').contains('Go Home');
    homeButton.click();

    cy.contains('h2', "You won't forget anything ever again");
  });
});
