describe("UI interactions: mobile nav, language, theme", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("toggles mobile navigation and navigates via a link", () => {
    cy.viewport("iphone-6");
    cy.get("header").find("button[aria-expanded]").as("menuBtn");
    cy.get("@menuBtn").should("have.attr", "aria-expanded", "false");
    cy.get("@menuBtn").click();
    cy.get("@menuBtn").should("have.attr", "aria-expanded", "true");
    cy.get("nav").find("a").should("be.visible").first().then(($a) => {
      const href = $a.attr("href") || "";
      cy.wrap($a).click();
      if (href.startsWith("#")) cy.location("hash").should("eq", href);
    });
  });

  it("switches language and updates the document language", () => {
    cy.contains("button", "EN").click();
    cy.document().its("documentElement.lang").should("eq", "en");
    cy.contains("About").should("be.visible");
    cy.contains("button", "FR").click();
    cy.document().its("documentElement.lang").should("eq", "fr");
    cy.contains("À propos").should("be.visible");
  });

  it("toggles theme and exposes the pressed state", () => {
    cy.get('header button[aria-pressed][title*="theme"]').as("themeButton");
    cy.get("@themeButton").should("have.attr", "aria-pressed", "false").click();
    cy.get("@themeButton").should("have.attr", "aria-pressed", "true");
    cy.document().its("documentElement").should("have.attr", "data-theme", "dark");
  });

  it("keeps project cases within a narrow mobile viewport", () => {
    cy.viewport(320, 760);
    cy.visit("/#/all-projects");
    cy.get("details").should("have.length", 6);
    cy.document().its("documentElement.scrollWidth").should("be.lte", 320);
    cy.get("details summary").last().click();
    cy.get("details").last().should("have.attr", "open");
  });
});
