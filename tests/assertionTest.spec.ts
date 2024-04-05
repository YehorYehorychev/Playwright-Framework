import { test, expect } from "@playwright/test"

test('Visible/Hidden Assertion', async ({ page }) => {
    await page.goto('https://sripriyakulkarni.com/');
    await page.locator('text=Automation Practice').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close();
})

test.only('Present/Not Present Assertion', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('.added-manually')).toHaveCount(1);
    await page.close();
})