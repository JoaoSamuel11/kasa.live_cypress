/// <reference types = "cypress"/>

beforeEach(() => {
  cy.login()
  cy.visit(Cypress.env('link'))
})

describe('Testes Pagina de favoritos kasa.live',{ testIsolation: true }, ()=>{
  
  it('selecionar jogo como favorito',()=>{
    cy.get('div.css-gmuwbf div').eq(6).click() // seletor fraco
    cy.get('button[aria-describedby="tooltip-:rgm:"] img').click()
    cy.get('[data-cy="btn-favorite-channel"]').click()
    // cy.contains('p', 'Digite um nome para continuar.').should('exist')
})
  
})