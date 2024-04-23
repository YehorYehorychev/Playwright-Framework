import { Before, BeforeAll, BeforeStep, After, AfterAll, AfterStep, Given, When, Then } from '@cucumber/cucumber';

Given('I am on the Page A', async function () {
    console.log("Page A");
});


When('I am on the Page B', async function () {
    console.log("Page B");
});

When('I am on the Page C', async function () {
    console.log("Page C");
});

Then('I am on the Page D', async function () {
    console.log("Page D");
});

// Scenario #2

Given('I am on the Page E', async function () {
    console.log("Page E");
});

When('I am on the Page D', async function () {
    console.log("Page D");
});

When('I am on the Page F', async function () {
    console.log("Page F");
});
Then('I am on the Page G', async function () {
    console.log("Page G");
});