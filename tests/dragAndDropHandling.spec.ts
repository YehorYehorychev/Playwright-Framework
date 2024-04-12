import { test, expect } from '@playwright/test'

test('Drag and Drop Approach 1', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    
    const washington = page.locator('//div[@id="box3"] [text()="Washington"]');
    const unitedStates = page.locator('//div[@id="box103"] [text()="United States"]');

    await washington.hover();
    await page.mouse.down();
    await unitedStates.hover();
    await page.mouse.up();
    await page.waitForTimeout(2000);

    await page.close();
});