import { test, expect } from '@playwright/test'
import * as orangeHRMData from './testData/orangeHRMCredentials.json'

test('Login Test with valid credentials Orange HRM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[placeholder="Username"]').fill(orangeHRMData.validUserName);
    await page.locator('input[placeholder="Password"]').fill(orangeHRMData.validPassword);
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();
});

test('Login Test with invalid credentials Orange HRM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[placeholder="Username"]').fill(orangeHRMData.invalidUserName);
    await page.locator('input[placeholder="Password"]').fill(orangeHRMData.invalidPassword);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('.orangehrm-login-error>.oxd-alert--error')).toBeVisible();
    await page.close();
});

