/// <reference types = "cypress"/>

beforeEach(() => {
    cy.login()
    cy.visit(Cypress.env('link'))
})

describe('Testes Perfil kasa.live', ()=>{

    it('Editar nome perfil',()=>{
        cy.wait(7000)
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="btn-edit-profile"]').click()
        cy.get('[data-cy="edit-profile-name"]').clear().type('nome editado')
        cy.get('[data-cy="edit-profile-submit"]').click({force:true})
        cy.contains('Perfil atualizado com sucesso!').should('exist')
    })

    it('Deletar perfil', ()=>{
        cy.wait(7000)
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="btn-delete-profile"]').click()
        cy.get('[data-cy="alert-dialog-submit"]').click()
        cy.contains('Conta excluída com sucesso!').should('exist')
    })
})