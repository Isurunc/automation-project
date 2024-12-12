export class HomePage {
  static verifyHomePage() {
    cy.get(".cartBtn").should("be.visible");
    cy.get(":nth-child(1) > .bottom-div > button").should("be.visible");
    cy.get(":nth-child(2) > .bottom-div > button").should("be.visible");
  }
}
