describe("UI interactions: mobile nav, language, theme", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("toggles mobile navigation and navigates via a link", () => {
    cy.viewport("iphone-6");

    // Find the header menu button (has aria-expanded)
    cy.get("header").find("button[aria-expanded]").as("menuBtn");

    cy.get("@menuBtn").should("have.attr", "aria-expanded", "false");
    cy.get("@menuBtn").click();
    cy.get("@menuBtn").should("have.attr", "aria-expanded", "true");

    // Navigation links should be visible after opening
    cy.get("nav")
      .find("a")
      .should("be.visible")
      .first()
      .then(($a) => {
        const href = $a.attr("href") || "";
        
        cy.wrap($a).click();
        // If it's an in-page hash link, location.hash should update
        if (href && href.startsWith("#")) {
          cy.location("hash").should("eq", href);
        }
      });
  });

  it("switches language and updates document language and UI", () => {
    // Click EN button to ensure English
    cy.contains("button", "EN").click();
    cy.document().its("documentElement.lang").should("eq", "en");

    // Nav should now show English label
    cy.contains("About").should("be.visible");

    // Switch back to FR
    cy.contains("button", "FR").click();
    cy.document().its("documentElement.lang").should("eq", "fr");
    cy.contains("À propos").should("be.visible");
  });

  it("toggles theme and updates document attribute", () => {
    cy.document()
      .its("documentElement")
      .then((html) => {
        const initial = html.getAttribute("data-theme") || "light";

        cy.get('button[aria-label="Toggle theme"]').click();

        cy.document()
          .its("documentElement")
          .should(
            "have.attr",
            "data-theme",
            initial === "light" ? "dark" : "light",
          );
      });
  });
});
