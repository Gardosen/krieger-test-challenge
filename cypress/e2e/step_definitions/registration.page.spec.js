const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');


When(/^I select (.*) on the (salutation selection)$/, function (salutation, domElement) {
    cy.helper.select(salutation, domElement);
});