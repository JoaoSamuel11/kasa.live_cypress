/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit(Cypress.env('link'))
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllCookies()
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    cy.then(Cypress.session.clearCurrentSessionData)
  })

describe('Testes login kasa.live',{ testIsolation: true }, ()=>{

    it('Login com campo "Email" vazio',()=>{ 
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-password"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="login-submit"]').click()
        cy.contains('p', 'Digite seu e-mail para continuar.').should('exist')
    })

    it('Login com campo "Senha" vazio',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-email"]').type(Cypress.env('user_email'))
        cy.get('[data-cy="login-submit"]').click()
        cy.contains('p', 'Digite sua senha para continuar.').should('exist')
    })

    it('Login com campo "Email" Inválido',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-email"]').type('teste')
        cy.get('[data-cy="login-password"]').type('joao2163')
        cy.get('[data-cy="login-submit"]').click()
        cy.contains('p', 'Digite um e-mail válido.').should('exist')
    })

    it('Login com campo "Senha" Inválida',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-email"]').type(Cypress.env('user_email'))
        cy.get('[data-cy="login-password"]').type('123')
        cy.get('[data-cy="login-submit"]').click()
        cy.contains('Não foi possivel fazer o login! Verifique se o email e a senha estão corretos.').should('exist')
    })

    it('Login válido',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-email"]').type(Cypress.env('user_email'))
        cy.get('[data-cy="login-password"]').type(Cypress.env('user_password'))
        cy.intercept('https://identitytoolkit.googleapis.com/v1/accounts:lookup?**').as('login')
        cy.get('[data-cy="login-submit"]').click()
        cy.wait('@login')
        cy.wait(200)
        cy.getCookie('next-leap_access').should('exist')       
        //cy.contains('Partidas').should('exist')
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="btn-logout-profile"]').click()
    })
})