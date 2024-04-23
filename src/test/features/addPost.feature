Feature: Conduit Post adding Functionality

Scenario: Add an Article on Conduit
Given I am on the conduit login page
When I login with valid credentials
And I click on the New Post button
And I fill up all require fields
When I Publish the article
Then I should see the Article posted