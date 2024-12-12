export class RightNavigationBar {
  static navigateHome() {
    cy.get('a[href="/Home"]').should("be.visible").click();
  }

  static navigatePractice() {
    cy.get('a[href="/Practice"]').should("be.visible").click();
  }

  static signOut() {
    cy.get(
      '[src="/static/media/burger-menu.93a4e66d6d393af53ac4ed46e5193397.svg"]'
    )
      .should("be.visible")
      .click();
    cy.get("button.nav-menu-item")
      .contains("Sign out")
      .should("be.visible")
      .click();
    cy.log("User signed out successfully");
  }
}
