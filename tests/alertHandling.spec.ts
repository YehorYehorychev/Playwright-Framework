import { test, expect } from '@playwright/test'

test('Simple Alert Handling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    })
    await page.locator('button[onclick="jsAlert()"]').click();
    // await page.locator('button[onclick="jsAlert()"]').click();
    // await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    await page.close();
});

test('Confirm Alert - OK Button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    })

    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.close();
});