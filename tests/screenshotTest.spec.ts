import { test } from '@playwright/test'

test('Login Test for Orange HRM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    // await page.screenshot({ path: 'tests/screenshots' + 'LoginTest.png' });
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    // await page.screenshot({ path: 'tests/screenshots' + 'HomePage.png' });
    // await page.locator('text=Logout').click();

})