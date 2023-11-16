/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Registration test suite", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  it("Register test", () => {
    cy.xpath('//a[normalize-space()="Login or register"]').click();
    cy.get("button").contains("Continue").click();
    cy.get("#AccountFrm_firstname").type("Bianca");
    cy.get("#AccountFrm_lastname").type("Elena");
    cy.get("#AccountFrm_email").type(faker.internet.email());
    cy.get("#AccountFrm_address_1").type("Romania");
    cy.get("#AccountFrm_city").type("Craiova");
    cy.get("#AccountFrm_zone_id").select("Bristol");
    cy.get("#AccountFrm_postcode").type("212574");
    cy.xpath('//select[@id="AccountFrm_country_id"]').select("United Kingdom");
    cy.get("#AccountFrm_loginname").type(faker.word.noun(5));
    cy.get("#AccountFrm_password").type("admin123");
    cy.get("#AccountFrm_confirm").type("admin123");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree").click();
    cy.xpath('//button[@title="Continue"]').click();
    cy.contains(
      "Congratulations! Your new account has been successfully created!"
    ).should("be.visible");
  });
});
