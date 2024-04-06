import { test, expect } from '@playwright/test'

test('Check-Box Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    const cricketCheckBox = page.locator('#checkbox1');
    const moviesCheckBox = page.locator('#checkbox2');
    const hockeyCheckBox = page.locator('#checkbox3');

    // Way 1 Assertion
    expect(cricketCheckBox).not.toBeChecked();
    expect(moviesCheckBox).not.toBeChecked();
    expect(hockeyCheckBox).not.toBeChecked();

    // Way 2 Assertion
    expect(await cricketCheckBox.isChecked()).toBeFalsy();
    expect(await moviesCheckBox.isChecked()).toBeFalsy();
    expect(await hockeyCheckBox.isChecked()).toBeFalsy();

    await cricketCheckBox.check();
    await moviesCheckBox.check();
    await hockeyCheckBox.check();

    expect(cricketCheckBox).toBeChecked();
    expect(moviesCheckBox).toBeChecked();
    expect(await hockeyCheckBox.isChecked()).toBeTruthy();

    await page.close();
});