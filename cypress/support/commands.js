Cypress.Commands.add('login',(
    username = Cypress.env('user_email'),
    password = Cypress.env('user_password')
) =>{
    cy.session('mySession', () => {
        // este é o código de configuração da sessão, ele será executado antes de preservar
        cy.visit(Cypress.env('link'));
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-email"]').type(username)
        cy.get('[data-cy="login-password"]').type(password)
        cy.get('[data-cy="login-submit"]').click()
        cy.contains('Partidas')
        cy.wait(2000)
      })

})

Cypress.Commands.add('logout',() =>{
    cy.visit(Cypress.env('link'))
    cy.get('[data-cy="btn-trigger-profile"]').click()
    cy.get('[data-cy="btn-logout-profile"]')
})