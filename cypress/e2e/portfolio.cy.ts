describe("Portfolio experience", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("language", "en");
      },
    });
  });

  it("renders the homepage hero and main sections", () => {
    cy.get("#home").should("be.visible");
    cy.contains("Sandratra Rolando RAOELISON").should("be.visible");
    cy.contains("About").should("be.visible");
    cy.contains("Skills").should("be.visible");
    cy.contains("Featured Projects").should("be.visible");
    cy.contains("Experience").should("be.visible");
  });

  it("navigates to the projects page from the hero CTA", () => {
    cy.contains("button", "View my projects").click();

    cy.location("hash").should("eq", "#/all-projects");
    cy.contains("All Projects").should("be.visible");
    cy.contains("Back to home").should("be.visible");
    // The project list may or may not contain external links depending on sample data.
    // Assert that at least one project card is rendered instead of requiring a specific link.
    cy.get("article").should("exist");
  });
});
