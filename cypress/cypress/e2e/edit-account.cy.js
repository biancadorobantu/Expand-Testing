/// <reference types="cypress" />

describe("Edit account test suite", () => {
    beforeEach(() => {
       cy.visit("https://automationteststore.com/index.php?rt=account/login/");
    });
  
    it("Edit first name test", () => {

        cy.get("#loginFrm_loginname").type("Bianca");
        cy.get("#loginFrm_password").type("admin123");
        cy.get('button').contains("Login").click();
        //cy.get("a").contains("Edit account details").click();
        //cy.get('[href="https://automationteststore.com/index.php?rt=account/edit"]').click();
        cy.xpath('//a[@data-original-title="Edit account details"]').click();
        cy.get("#AccountFrm_firstname").clear(); 
        cy.get("#AccountFrm_firstname").type("new name");
        cy.get('button').contains("Continue").click();
        cy.contains('Your account has been successfully updated.').should('be.visible');
    });

  });

