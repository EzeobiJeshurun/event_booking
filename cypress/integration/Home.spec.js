describe("Home page tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should show home page", () => {
    cy.get('[data-testid="home-page-container"]', {
      timeout: 20000,
    }).should("have.length", 1);
  });
  it("Should have cards", () => {
    cy.get('[data-testid="card-container"]', {
      timeout: 20000,
    }).should("have.length", 12);
  });
  it("Should display names", () => {
    cy.contains('George', {
      timeout: 20000,
    }).should('be.visible');
  });
  
});

export {};
