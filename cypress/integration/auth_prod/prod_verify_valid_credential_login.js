/* eslint-disable cucumber/async-then */
/// <reference types="cypress" />


import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AuthPage from "../../pageObjects/auth";

const authPage = new AuthPage();
Given("I visit autocheck Nigeria page", function() {
  authPage.visitProdNigeriaPage();
});

When("I click on the sign in navitem", function() {
  cy.get(authPage.SigninNavItem)
    .should("exist")
    .should("have.text", "Sign In")
    .click();
});
And("I insert valid credential to login", function() {
  authPage.fillEmailAndPassword(authPage.prodemail, authPage.prodpassword);
  authPage.clickSignInButton();
});
Then("User should be redirected to the marketplace homepage", function() {
  authPage.verifyProdLoggedPage();
});
