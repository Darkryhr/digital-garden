describe('First e2e test', () => {
  it('actually works', () => {
    cy.visit('/');
    cy.contains('unboring');
  });

  it('has blog posts', () => {
    cy.visit('/blog');
    cy.get("[data-cy='blog-post']").should('exist');
  });

  it('has projects', () => {
    cy.visit('/portfolio');
    cy.get("[data-cy='portfolio-project']").should('have.length.above', 4);
  });
});
