import { test, expect } from "@playwright/test"

test('Visible/Hidden Assertion', async ({ page }) => {
    await page.goto('https://sripriyakulkarni.com/');
    await page.locator('text=Automation Practice').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close();
})