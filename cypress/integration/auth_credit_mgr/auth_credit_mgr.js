/* eslint-disable cucumber/async-then */
/// <reference types="cypress" />

import faker from "faker";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CreditManager from "../../pageObjects/auth_crdmgr";

const creditManager = new CreditManager();
 
Given('I visit autochek web Credit Manager page', () => {
	creditManager.visitCreditManager();
});

When('I input valid credential for Credit Manager user', () => {
	creditManager.fillEmailAndPassword(creditManager.email, creditManager.password);
});

And('I click on submit or submit button', () => {
	creditManager.clickSignInButton();
});

Then('User should be redirected to the Credit Manager dashboard page', () => {
	creditManager.verifyDashboard();
});


When('I input invalid credential for Credit Manager user', () => {
	const email = faker.internet.email(),
    password = faker.internet.password();
  creditManager.fillEmailAndPassword(email, password);
});


Then('User should be shown an error message', () => {
	creditManager.verifyLoginErrorPage();
});


When('I click on the sign out button', () => {
	creditManager.clickSignOut();
});

Then('User should be sign out of the web Credit Manager', () => {
	creditManager.verifySignout();
});
