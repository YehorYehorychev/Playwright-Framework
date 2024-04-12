import { test, expect } from '@playwright/test'

test('Download a file', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    await page.locator('#textbox').click();
    await page.locator('#textbox').pressSequentially('Hello World!');
    await page.locator('#createTxt').click();
    await page.locator('#link-to-download').click();
    await page.close();
});