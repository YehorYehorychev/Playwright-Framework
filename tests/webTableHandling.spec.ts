import { test, expect } from '@playwright/test'

test('Web Table Handling', async ({ page }) => {
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

test('Selecting Single checkbox in the table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
    })
    await matchedRow.locator('input').check();
    await page.close();
});

test('Selecting Multiple checkbox using function', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    await selectProduct(rows, page, 'Product 1');
    await selectProduct(rows, page, 'Product 3');
    await selectProduct(rows, page, 'Product 5');

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
    })

    await matchedRow.locator('input').check();
    await page.close();
});

async function selectProduct(rows, page, productName) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
    })
    await matchedRow.locator('input').check();
}