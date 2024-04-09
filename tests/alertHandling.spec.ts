import { test, expect } from '@playwright/test'

test('Simple Alert Handling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.locator('button[onclick="jsAlert()"]').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    await page.close();
});