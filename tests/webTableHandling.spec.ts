import { test, expect } from '@playwright/test'

test('Web Table Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.close();
});