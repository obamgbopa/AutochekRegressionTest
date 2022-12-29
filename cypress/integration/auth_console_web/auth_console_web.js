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

Then('User should be redirected to the console dashboard page', () => {
	authConsole.verifyDashboard();
});


When('I input invalid credential for console user', () => {
	const email = faker.internet.email(),
    password = faker.internet.password();
  authConsole.fillEmailAndPassword(email, password);
});


Then('User should be shown an error message', () => {
	authConsole.verifyLoginErrorPage();
});


When('I click on the sign out button', () => {
	authConsole.clickSignOut();
});

Then('User should be sign out of the web console', () => {
	authConsole.verifySignout();
});
