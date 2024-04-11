import { test, expect } from '@playwright/test'

test('Frame Handling using Page.Frame()', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // To Find a total number of Frames
    const allFrames = page.frames();
    const allFramesCount = allFrames.length;
    console.log('Total Frames count is: ' + allFramesCount);
    const frame1 = page.frame('https://ui.vision/demo/webtest/frames/frame_1.html');
    await frame1?.locator('input[name="mytext1"]').fill('PlayWright Test');

    await page.waitForTimeout(3000);
    await page.close();
});