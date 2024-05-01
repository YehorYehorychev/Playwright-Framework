import { test, expect } from '@playwright/test'

test('Download a file', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    await page.locator('#textbox').click();
    await page.locator('#textbox').pressSequentially('Glory to Ukraine!');
    await page.locator('#createTxt').click();

    const download = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#link-to-download').click()
    ])

    const path = await download[0].path();
    console.log("Downloaded Path ... " + path);

    // Way 1 -> Using default file name
    // const fileName = download[0].suggestedFilename();
    // await download[0].saveAs(fileName);

    // Way 2 -> Custom file name
    const customisedFileName = "Playwright_Downloaded_File";
    await download[0].saveAs(customisedFileName);

    await page.locator('#link-to-download').click();
    await page.close();
});