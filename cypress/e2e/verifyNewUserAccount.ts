import { SignUpPage } from "../support/pages/signuppage";

describe("SignUp New User", () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });

  it("Test Case 1: New user Sign Up", () => {
    SignUpPage.signUpNewUser();
  });
});
