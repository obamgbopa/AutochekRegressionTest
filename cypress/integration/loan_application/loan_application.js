/* eslint-disable cucumber/async-then */
/// <reference types="cypress" />

import faker from "faker";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoansPage from "../../pageObjects/loans";

const loansPage = new LoansPage();
 
Given('I visit autocheck Nigeria page', () => {
	loansPage.visitProdNigeriaPage();
});

When('I click on the buy car on the navitem', () => {
	loansPage.carsForSalePage();
});

Given('I view the details of the first inventory', () => {
	loansPage.verifyCarPage();
});

Given('I click on apply for loan', () => {
	loansPage.applyBtn();
});

Given('I click on apply for pre loan', () => {
	loansPage.applyPreBtn();
});

Given('I selected the product type', () => {
	loansPage.selectProduct();
});

Given('I fill the loan form and submit', () => {
	var bvnNumber = 23348849949,
	dob = '1980-01-05';
	const firstName = faker.name.firstName(),
	lastName = faker.name.lastName(),
    email = faker.internet.email(),
	//dob = faker.date.between('2015-01-01', '2015-01-05'),
	employerName = faker.company.companyName(),
	//bvnNumber = faker.random.numeric(11),
	salary = faker.finance.amount(),
    phone = faker.phone.phoneNumberFormat(2);
	loansPage.fillFirstAndLastName(firstName,lastName);
	loansPage.fillDobAndEmailAndPhone(dob,email,phone);
	
	loansPage.fillEmploymentInformation(employerName,bvnNumber,salary);
	loansPage.fillAboutUsAndStateCity();
	loansPage.completeRegistrationFlow();
});

Then('User should be shown a success message', () => {
	loansPage.verifySuccessPage();
});

When('I click on the apply for financin', () => {
	loansPage.preQualify();
});



