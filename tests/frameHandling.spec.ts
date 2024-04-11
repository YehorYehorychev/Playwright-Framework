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

test('Frame Handling using Page.FrameLocator()', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1?.locator('input[name="mytext1"]').fill('PlayWright Test');
    await page.waitForTimeout(3000);
    await page.close();
});

test.only('Nested Frame Handling', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.waitForLoadState('networkidle');

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    if (frame3) {
        const childFrames = frame3.childFrames();
        if (childFrames && childFrames.length > 0) {
            await childFrames[0].waitForLoadState('networkidle');

            const checkbox1 = await childFrames[0].locator('//*[@id="i8"]/div[3]/div');
            const checkbox2 = await childFrames[0].locator('//*[@id="i19"]/div[3]');

            if (checkbox1 && checkbox2) {
                if (!checkbox1.isChecked())
                    await checkbox1.check({ force: true });

                if (!checkbox2.isChecked())
                    await checkbox2.check({ force: true });
            }
        }
    }
    await page.waitForTimeout(3000);
    await page.close();
});
