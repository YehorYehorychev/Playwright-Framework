import { test } from '@playwright/test'

test('Different locator Strategy', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    // await page.locator('id="user-name"').fill('standard_user');
    // await page.locator('//input[@id="user-name"]').fill('standard_user');
    // await page.locator('text=Login').click
    // await page.locator('input:has-text("Login")').click
})