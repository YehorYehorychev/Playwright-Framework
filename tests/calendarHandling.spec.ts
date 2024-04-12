import { test, expect } from '@playwright/test'
import { DateTime } from 'luxon'

test('Using Fill Method', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = "1993-10-18";
    await page.locator('#birthday').fill(date);
    await page.close();
});

test('Using Luxon', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    await page.locator('input[placeholder="Start date"]').click();

    const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
    const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]');
    const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]');

    let dateToSelect = "October 1993";
    const formattedMonth = DateTime.fromFormat(dateToSelect, "MMMM yyyy");

    while (await monthYear.textContent() != dateToSelect) {
        if (formattedMonth < DateTime.fromJSDate(new Date())) {
            await prevButton.click();
        } else {
            await nextButton.click();
        }
    }

    await page.locator('//td[@class="day"] [text()="18"]').click();
    await page.close();
});