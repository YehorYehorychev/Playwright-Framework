import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';

let browser: Browser;
let page: Page;
const articleName = "Playwright " + Math.random();

When('I click on the New Post button', async function () {
    await page.locator('//a[@href="#editor"]').click();
});

When('I fill up all require fields', async function () {
   await page.locator('input[placeholder="Article Title"]').fill(articleName);
   await page.locator('input[placeholder="What\'s this article about?"]').fill(articleName);
   await page.locator('textarea[placeholder="Write your article (in markdown)"]').fill(articleName);
   await page.locator('input[placeholder="Enter tags"]').fill(articleName);
});

When('I Publish the article', async function () {
    await page.locator('button[type="button"]').click();
 });

Then('I should see the Article posted', async function () {
  expect(page.locator('div[class="container"] h1')).toHaveText(articleName);
  await browser.close();
});