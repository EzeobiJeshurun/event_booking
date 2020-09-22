describe("Schedule page tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/schedule/2");
  });

  it("Should show Schedule page", () => {
    cy.get('[data-testid="schedule-page-container"]', {
      timeout: 20000,
    }).should("have.length", 1);
  });
  it("Should have time picker", () => {
    cy.get('[data-testid="schedule-page-picker-container"]', {
      timeout: 20000,
    }).should("have.length", 1);
  });
  it("Should display pick a time ", () => {
    cy.contains('pick a time', {
      timeout: 20000,
    }).should('be.visible');
  });
  
});

export {};
