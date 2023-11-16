/// <reference types="cypress" />

describe("Authentication test suite", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login/");
  });

  it("login/logout test", () => {

    cy.get("#loginFrm_loginname").type("Bianca");
    cy.get("#loginFrm_password").type("admin123");
    cy.get('button').contains("Login").click();
    //cy.get('.sub menu_logout').contains('.menu_text','Logout').click();
    //cy.get('.menu_text').contains("Logout").click();
    //cy.get('//a[@href="https://automationteststore.com/index.php?rt=account/logout"][normalize-space()=""]').click();
    cy.get(".side_account_list >li:last-child").click();
    //cy.get('/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/ul[1]/li[10]/a[1]').click();
    cy.contains('You have been logged off your account. It is now safe to leave the computer.').should('be.visible');
  });
});
//a[@href='https://automationteststore.com/index.php?rt=account/logout'][normalize-space()=''].click()
