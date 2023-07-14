describe('Schemes Functionality Checks', () => {

    it ('Should add scheme and pre-populate fields from meta data', function() {
        cy.visit('http://localhost:4200/home')

        cy.get('[id=list-button]').click();
        cy.get('table[id=file-table]').contains('td', 'name1').siblings().parent().as('row');
        cy.get('@row').find('input[type="radio"]', {timeout: 10000}).click();
    });

})