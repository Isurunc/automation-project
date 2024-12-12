import { VERY_SHORT_TIME } from "../common/timeouts";

export class SignInPage {
  static signInRegisteredUser() {
    cy.visit(Cypress.env("loginURL"));
    cy.wait(VERY_SHORT_TIME.timeout);
    cy.get('input[name="email1"]').clear().type(Cypress.env("UserEmail"));
    cy.get('input[id="password1"]').clear().type(Cypress.env("Password"));
    cy.get('button[type="submit"]').should("be.visible").click();
  }

  static addToCartAndNavigate() {
    cy.get(":nth-child(1) > .bottom-div > button").should("be.visible").click();
    cy.get(":nth-child(3) > .bottom-div > button").should("be.visible").click();
    cy.get(".cartBtn").should("be.visible").click();
  }

  static enrollCourse() {
    cy.contains("button", "Enroll Now").click();
    this.fillEnrollInformation();
    cy.get(".action-btn").contains("Enroll Now").click();
    cy.get(".uniqueId").should("be.visible");
    cy.log("Course enrolled successfully");
    cy.get(".action-btn").contains("Cancel").click();
  }

  private static fillEnrollInformation() {
    cy.fixture("enrollData.json").then((data) => {
      cy.get("#address").type(data.address);
      cy.get("#phone").type(data.phone);
    });
  }
}
