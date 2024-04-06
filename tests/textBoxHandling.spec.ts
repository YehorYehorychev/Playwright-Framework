import { test } from '@playwright/test'

test('Fill Method', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('input[placeholder="Password"]').press('Enter');
    await page.locator('(//span[@class="oxd-userdropdown-tab"])[1]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();
})

test.only('Press - Sequentially', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[placeholder="Username"]').pressSequentially('Admin');
    await page.locator('input[placeholder="Password"]').pressSequentially('admin123');
    await page.locator('input[placeholder="Password"]').press('Enter');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();
})