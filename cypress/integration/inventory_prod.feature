Feature: Visit the Inventory Page and Listing
  Scenario: Visit the inventory page
    Given I visit autocheck Nigeria page
    When I click on the buy car on the navitem
    And I view the details of the first inventory
    Then User should be redirected to the inventory page and listing of cars 

  Scenario: Filter Inventory by Type&Model
    Given I visit autocheck Nigeria page
    When I click on the buy car on the navitem
    And I click on the Type and Model Filter
    And I select a type and submit
    Then User should be redirected to the inventory page and listing of cars of that type or model

