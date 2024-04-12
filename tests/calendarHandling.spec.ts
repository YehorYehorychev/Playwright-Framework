import { test, expect } from '@playwright/test'

test('Using Fill Method', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = "1993-10-18";
    await page.locator('#birthday').fill(date);
    await page.close();
});