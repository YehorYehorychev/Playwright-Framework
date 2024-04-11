import { test, expect } from '@playwright/test'

test('Single Tab Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")')
    ])

    await newTab.waitForLoadState();
    await newTab.locator('#navbarDropdown').click();
    await newTab.locator('a[href="/about"]').click();
    await newTab.close();

    await page.close();
});

test('Single Window Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Seperate"]').click();

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newwindow()"]')
    ])

    await newWindow.waitForLoadState();
    await newWindow.locator('#navbarDropdown').click();
    await newWindow.locator('a[href="/about"]').click();
    await newWindow.close();

    await page.close();
});