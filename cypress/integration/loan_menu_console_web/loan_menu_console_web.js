/* eslint-disable cucumber/async-then */
/// <reference types="cypress" />

import faker from "faker";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AuthConsole from "../../pageObjects/auth_console";

const authConsole = new AuthConsole();
 
Given('I visit autochek web console page', () => {
	authConsole.visitConsole();
});

When('I input valid credential for console user', () => {
	authConsole.fillEmailAndPassword(authConsole.email, authConsole.password);
});

And('I click on submit or submit button', () => {
	authConsole.clickSignInButton();
});

And('I click on the loan menu item', () => {
	authConsole.clickLoanMenu();
});

Then('User should be redirected to the All loans page', () => {
	authConsole.listAllLoan();
});
