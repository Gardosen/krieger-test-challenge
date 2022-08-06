const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given(/^User goes to the (.*)$/, function(pageDescription) {
    cy.helper.goto(pageDescription);
});

Given(/^(?:I am|User is) on the (.* page)$/, function (pageDescription) {
    const url = cy.pageMap.getPageUrl(pageDescription);
    cy.url().should('include', url);
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPage(pageDescription);
});

When(/^I type "(.*)" into the (.* input field|.* mask)( and hit enter)?$/, function (text, selectorIdentifier, hitEnter) {
    cy.helper.typeText(text,selectorIdentifier,hitEnter!==undefined);
});

When(/^I want to search for "([^"]*)"$/, function (searchTerm) {
    cy.scope.searchTerm = searchTerm;
});

When(/^I (?:reject|accept) the (cookie policy) by clicking the (save settings button|accept all cookies button)$/, function (domElement, button) {
    cy.helper.getElement(domElement).should('be.visible');
    cy.helper.clickElement(button);
});

When(/^I click the (.*)$/, function (button) {
    cy.helper.clickElement(button);
});




