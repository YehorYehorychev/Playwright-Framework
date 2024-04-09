import { test, expect } from '@playwright/test'

test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.selectOption('#Skills', {
        value: "Android"
    })

    await page.pause();

    await page.selectOption('#Skills', {
        label: "Art Design"
    })

    await page.pause();

    await page.selectOption('#Skills', {
        index: 3
    })

    await page.pause();
    await page.close();
});

test.only('Multi Static DropDown Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

    await page.selectOption('#multi-select', [
        { value: "Ohio" },
        { label: "Texas" },
        { index: 3 }
    ])
    await page.pause();
    await page.close();
});