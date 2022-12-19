/* eslint-disable cucumber/async-then */
/// <reference types="cypress" />

import faker from "faker";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import RegistrationPage from "../../pageObjects/register";

const registrationPage = new RegistrationPage();
Given("I visit autocheck Nigeria page", function() {
  registrationPage.visitProdNigeriaPage();
});

When("I click on the register navitem", function() {
  cy.get(registrationPage.registerNavItem)
    .should("exist")
    .should("have.text", "Register")
    .click();
});
And("I insert information to register", function() {
  const firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    email = faker.internet.email(),
    phone = faker.phone.phoneNumberFormat(2),
    password = faker.internet.password();
  registrationPage.fillFirstAndLastName(firstName, lastName);
  registrationPage.fillEmailAndPhone(email, phone);
  registrationPage.completeRegistrationFlow(password);
});
Then("user should be redirected to success page", function() {
  registrationPage.visitProdNigeriaPage();
});
