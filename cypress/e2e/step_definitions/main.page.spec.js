const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

When(/^I type my search term into the (.* input field|.* mask)( and hit enter)?$/, function (selectorIdentifier, hitEnter) {
    cy.helper.typeText(cy.scope.searchTerm,selectorIdentifier,hitEnter!==undefined);
});

