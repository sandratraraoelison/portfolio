describe("Portfolio experience", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("language", "en");
      },
    });
  });

  it("renders the homepage hero, sections, and Soulmeet", () => {
    cy.get("#home").should("be.visible");
    cy.contains("Sandratra Rolando RAOELISON").should("be.visible");
    cy.contains("About").should("be.visible");
    cy.contains("Skills").should("be.visible");
    cy.contains("Case studies").should("be.visible");
    cy.contains("Soulmeet — coaching and more meaningful connections").should("be.visible");
    cy.contains("Experience").should("be.visible");
  });

  it("navigates to the project cases and shows Soulmeet links", () => {
    cy.contains("button", "Explore the cases").click();

    cy.location("hash").should("eq", "#/all-projects");
    cy.contains("Project field notes").should("be.visible");
    cy.contains("Back to home").should("be.visible");
    cy.get("details").should("have.length", 6);
    cy.get('a[href="https://github.com/sandratraraoelison/soulmeet"]').should("exist");
    cy.get('a[href="https://soulmeet-dashboard.vercel.app"]').should("exist");
  });

  it("opens and closes a project case with the keyboard", () => {
    cy.visit("/#/all-projects");
    cy.get("details summary").first().focus().type("{enter}");
    cy.get("details").first().should("have.attr", "open");
    cy.get("details summary").first().focus().type("{enter}");
    cy.get("details").first().should("not.have.attr", "open");
  });
});
