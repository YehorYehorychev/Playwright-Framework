Feature: Orange HRM Login Functionality

Scenario Outline: Login with valid/invalid credentials
Given I am on the Orange HRM login page
When I login with username as "<username>" and password as "<password>"
And I click on the login button
Then I route to the Orange HRM home page

Examples:
|username|password|
|Admin|admin123|
|Admin123|admin123|