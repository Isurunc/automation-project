export class SignUpPage {
  static navigate() {
    cy.visit("https://freelance-learn-automation.vercel.app/login");
  }

  static signUpNewUser() {
    cy.visit(Cypress.env("loginURL"));
    cy.get('a[href="/signup"]').should("be.visible").click();
    cy.get('input[name="name"]').clear().type(Cypress.env("Username"));
    cy.get('input[name="email"]').clear().type(Cypress.env("Email"));
    cy.get('input[id="password"]').clear().type(Cypress.env("Password"));
    this.checkInterests();
    this.selectFemale();
    this.selectState();
    this.selectHobbies();
    cy.get('button[type="submit"]').should("be.visible").click();
    this.verifySignUp();
  }

  private static checkInterests() {
    cy.contains("label.interest", "Playwright").click();
    cy.contains("label.interest", "Cypress").click();
    cy.contains("label.interest", "Selenium").click();
  }

  private static selectFemale() {
    //select Female
    cy.get("#gender2").should("be.visible").check();
  }

  private static selectState() {
    cy.get("#state").select("Bihar");
  }

  private static selectHobbies() {
    cy.get("#hobbies").select("Dancing");
  }

  private static verifySignUp() {
    cy.contains("Signup successfully, Please login!").should("be.visible");
    cy.log("User signed Up successfully");
  }
}
