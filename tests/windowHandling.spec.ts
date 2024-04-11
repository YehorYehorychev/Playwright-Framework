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

test.only('Multiple Tab Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Multiple"]').click();

    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')
    ])

    await multipleTab.waitForLoadState();
    const pages = multipleTab.context().pages();
    console.log("Total pages opened:" + pages.length);
    await multipleTab.close();

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('button[onclick="multiwindow()"]')
    ]);

    await newPage.waitForLoadState();
    await newPage.fill('//*[@id="email"]', 'egor@yahoo.com');
    // await page[1].locator('input[placeholder="Email id for Sign Up"]').fill('egor@yahoo.com');
    // await multipleTab.waitForTimeout(2000);

    // await pages[2].waitForTimeout(2000);
    // await pages[2].locator('#navbarDropdown').click();
    // await pages[2].locator('a[href="/about"]').click();
    // await multipleTab.waitForTimeout(2000);

    // await pages[1].close();
    // await pages[2].close();
    await page.close();
});