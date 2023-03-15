describe('Regressionshoptests', () => {
 // beforeEach(() => {
   // cy.login('or.pixelmatic.test.2066@getnada.com', 'Ape4clam!d')
  //it('Check the store can be opened', () => {
    //cy.visit('https://regressionshop.dermpro.com/')
    //cy.get('a.level-top[title="Products"]')
    //  .click({force: true})
    //cy.url().should('include','/products-site')
    //cy.get('#newsletter')
      //.type('fake@email.com').should('have.value', 'fake@email.com')

     // cy.get('div.actions button.action.subscribe.primary[title="Subscribe Now"][type="submit"]')
        //.click({force: true})
        //.click({force: true})  
 //})
 //it('Login with invalid credentials', () => {
  //cy.visit('https://regressionshop.dermpro.com/customer/account/login')
  ///.get('#email')
   // .type('fake@email.com').should('have.value', 'fake@email.com')
   // cy.get('#pass')
    //  .type('fake@email.com').should('have.value', 'fake@email.com')
        // cy.get('#send2')
              //.click({force: true})
                  //cy.contains('You did not sign in correctly - the email or password you entered is incorrect.')
               // })
//it('Login with valid credentials and SIGN OUT', () => {
 // cy.visit('https://regressionshop.dermpro.com/customer/account/login')
 // cy.get('#email')
 //   .type('or.pixelmatic.test.2066@getnada.com').should('have.value', 'or.pixelmatic.test.2066@getnada.com')
 // cy.get('#pass')
 //   .type('Ape4clam!').should('have.value', 'Ape4clam!')
 // cy.get('#send2')
 //   .click({force: true})
 // cy.url().should('include','/customer/account') 
 // cy.get('.authorization-link a[title="Sign Out"]').first().click({force: true})
 // cy.contains('You are signed out')

//})
 it('Verify that subscription product can be added to Shopping Cart', () => {
   cy.visit('https://regressionshop.dermpro.com/customer/account/login')
   cy.get('#email')
     .type('or.pixelmatic.test.2066@getnada.com').should('have.value', 'or.pixelmatic.test.2066@getnada.com') //fill login
   cy.get('#pass')
     .type('Ape4clam!').should('have.value', 'Ape4clam!') //fill password
   cy.get('#send2')
     .click({force: true})
   cy.url().should('include','/customer/account') //check that login is successful
   cy.get('a.level-top[title="Products"]') //go to Products category page
     .click({force: true})    
   //cy.wait('#cart-totals')
   cy.contains('Add to Cart').first().click({force: true}) //open first product details page
   cy.get('#subscription_option').select('Every 2 months') //select subscription option value
   cy.contains('Add to Cart').click({force: true}) //click on Add to cart button
   //cy.wait('.grand totals')
   cy.contains('Go to Checkout')//.click({force: true}) //check that product is added to Shopping cart         
})  
it('Verify if user can add product to compare page and trmove it ', () => {
  cy.visit('https://regressionshop.dermpro.com/customer/account/login')
  cy.get('#email')
    .type('or.pixelmatic.test.2066@getnada.com').should('have.value', 'or.pixelmatic.test.2066@getnada.com') //fill login
  cy.get('#pass')
    .type('Ape4clam!').should('have.value', 'Ape4clam!') //fill password
  cy.get('#send2')
    .click({force: true})
  cy.url().should('include','/customer/account') //check that login is successful
  cy.get('a.level-top[title="Products"]') //go to Products category page
    .click({force: true})    
  //cy.wait('#cart-totals')
  cy.contains('Add to Cart').first().click({force: true}) //open first product details page
  cy.contains('Add to Wishlist').click({force: true}) //click on Add to cart button
  //cy.wait('.grand totals')  
})  





})