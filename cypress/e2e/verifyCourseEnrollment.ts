import { RightNavigationBar } from "../support/pages/rightnavigation";
import { SignInPage } from "../support/pages/signinpage";

describe("Training Course Enrollment", () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });

  it("Test Case 1: verify Registered User login", () => {
    SignInPage.signInRegisteredUser();
  });

  it("Test Case 2: verify Add to Cart", () => {
    SignInPage.addToCartAndNavigate();
  });

  it("Test Case 3: Verify Course Enrollment", () => {
    SignInPage.enrollCourse();
  });

  after(() => {
    RightNavigationBar.signOut();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });
});
