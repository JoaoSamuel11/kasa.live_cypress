/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit(Cypress.env('link'))
  })
describe('Testes cadastro de conta kasa.live', ()=>{

    it('Criar conta com campo "Nome" vazio',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-createAccount"]').click()
        cy.get('[data-cy="register-email"]').type(Cypress.env('user_email'))
        cy.get('[data-cy="register-password"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="register-confirmPassword"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="register-submit"]').click()
        cy.contains('p', 'Digite um nome para continuar.').should('exist')
    })
     
    it('Criar conta com campo "Email" vazio',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-createAccount"]').click()
        cy.get('[data-cy="register-name"]').type(Cypress.env('username'))
        cy.get('[data-cy="register-password"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="register-confirmPassword"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="register-submit"]').click()
        cy.contains('p', 'Digite um e-mail para continuar.').should('exist')
    })

    it('Criar conta com campo "Senha" vazio',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-createAccount"]').click()
        cy.get('[data-cy="register-name"]').type(Cypress.env('username'))
        cy.get('[data-cy="register-email"]').type(Cypress.env('user_email'))
        cy.get('[data-cy="register-confirmPassword"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="register-submit"]').click()
        cy.contains('p', 'Digite uma senha para continuar').should('exist')
    })

    it('Criar conta com campo "Confirmar senha" vazio',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-createAccount"]').click()
        cy.get('[data-cy="register-name"]').type(Cypress.env('username'))
        cy.get('[data-cy="register-email"]').type(Cypress.env('user_email'))
        cy.get('[data-cy="register-password"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="register-submit"]').click()
        cy.contains('p', 'As senhas devem ser iguais').should('exist')
    })

    it('Criar conta com campo "Email" inválido',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-createAccount"]').click()
        cy.get('[data-cy="register-name"]').type(Cypress.env('username'))
        cy.get('[data-cy="register-email"]').type('teste')
        cy.get('[data-cy="register-password"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="register-confirmPassword"]').type(Cypress.env('user_password'))
        cy.get('[data-cy="register-submit"]').click()
        cy.contains('p', 'Digite um e-mail válido.').should('exist')
    })

    it('Criar conta com campo "senha" inválido',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-createAccount"]').click()
        cy.get('[data-cy="register-name"]').type(Cypress.env('username'))
        cy.get('[data-cy="register-email"]').type(Cypress.env('user_email'))
        cy.get('[data-cy="register-password"]').type('123')
        cy.get('[data-cy="register-confirmPassword"]').type('123')
        cy.get('[data-cy="register-submit"]').click()
        cy.contains('p', 'Sua senha deve ter no mínimo 6 caracteres.').should('exist')
    })

    it('Criar conta com campo "confirmar senha" diferente de "Senha"',()=>{
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-createAccount"]').click()
        cy.get('[data-cy="register-name"]').type(Cypress.env('username'))
        cy.get('[data-cy="register-email"]').type(Cypress.env('user_email'))
        cy.get('[data-cy="register-password"]').type(Cypress.env('user_password'))
        cy.get('input[placeholder="Confirme sua senha"]').type('1234567')
        cy.get('[data-cy="register-submit"]').click()
        cy.contains('p', 'As senhas devem ser iguais').should('exist')
    })

})
