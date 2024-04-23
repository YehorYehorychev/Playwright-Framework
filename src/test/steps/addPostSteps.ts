import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('I am on the conduit login page', async function () {
  browser = await chromium.launch({headless:false});
  page = await browser.newPage();
  await page.goto('https://react-redux.realworld.io/');
  await page. locator('//a[normalize-space()="Sign in"]').click();
});

When('I login with valid credentials', async function () {
  await page.locator('input[placeholder="Email"]').fill("playwrightdemo@gmail.com");
  await page.locator('input[placeholder="Password"]').fill("playwrightdemo");
  await page.locator('button[type="submit"]').click();
});

When('I click on the New Post button', async function () {
    
});

When('I fill up all require fields', async function () {
   
});

Then('I should see the Article posted', async function () {
  
});