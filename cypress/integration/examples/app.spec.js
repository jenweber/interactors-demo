import { Button } from 'bigtest';

describe('Interactors with Cypress', () => {
  beforeEach(() => cy.visit('http://localhost:3000'));

  it('clicks button', () => {
    cy.do(
      Button('Sign In').click()
    );
    cy.expect([
      Button('Sign In').absent(),
      Button('Log Out').exists(),
    ]);
  })
})