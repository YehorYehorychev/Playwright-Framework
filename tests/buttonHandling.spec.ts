import { test, expect } from '@playwright/test'

test.only('Regular Button single click', async ({ page }) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator('#click_area').click();
    await expect(page.locator('#click_type')).toHaveText('Click');
});

// test('Double Click', async ({ page }) => {
//     await page.goto('https://play1.automationcamp.ir/mouse_events.html');

// });

// test('Right Click', async ({ page }) => {
//     await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    

// });