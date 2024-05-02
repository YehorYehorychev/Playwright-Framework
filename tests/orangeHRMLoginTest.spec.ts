import { test, expect } from '@playwright/test'

test('Login Test with valid credentials Orange HRM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    const currentURL = page.url();
    expect(currentURL).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.close();
});