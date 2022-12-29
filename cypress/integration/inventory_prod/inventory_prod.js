/* eslint-disable cucumber/async-then */
/// <reference types="cypress" />


import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import InventoryPage from "../../pageObjects/inventory";

const inventoryPage = new InventoryPage();
Given("I visit autocheck Nigeria page", function() {
  inventoryPage.visitProdNigeriaPage();
});

When("I click on the buy car on the navitem", function() {
  inventoryPage.carsForSalePage();
});

And("I view the details of the first inventory", function() {
  inventoryPage.verifyCarPage();
});

Then("User should be redirected to the inventory page and listing of cars", function() {
  inventoryPage.searchCarPage();
});


And("I click on the Type and Model Filter", function() {
  inventoryPage.openFilter();
});

And("I select a type and submit", function() {
  inventoryPage.selectFilter();
});

Then("User should be redirected to the inventory page and listing of cars of that type or model", function() {
  inventoryPage.filterType();
});
