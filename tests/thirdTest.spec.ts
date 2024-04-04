import { test, expect } from '@playwright/test';

test('My Third Test', async ({ page }) => {
    await page.goto('https://www.google.com/');

    // Expect a title "Google"
    await expect(page).toHaveTitle('Google');
});