import { test, expect } from '@playwright/test'

test.only('Web Table Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');

    // Total rows and columns
    const columns = table.locator('tr th');
    console.log("Number of Columns: ", await columns.count());

    const rows = table.locator('tbody tr');
    console.log("Number of Rows: ", await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(7);


    await page.close();
});