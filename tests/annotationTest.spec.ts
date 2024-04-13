import { test } from '@playwright/test'

test.skip('Skipped test', async () => {
    console.log('I am a Skipped Test');
})

test.skip('Skipped in Webkit', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'This feature is not implemented for mac OS');
    console.log('I am a Skipped Test with conditions');
})

test('Not yet ready Test', async ({ page, browserName }) => {
    test.fail(browserName === 'webkit', 'This feature is not implemented for mac OS')
    console.log('I am a Failed Test with conditions');
})

test.fixme('Fix me Test', async ({ page, browserName }) => {
    console.log('I am a FixMe Test');
})

test('Slow Test', async () => {
    console.log('I am a Slow Test');
    test.slow();
})

test('Slow Test with Condition', async ({ browserName }) => {
    test.slow(browserName === 'webkit', 'We need to make this test slower on mac OS')
    console.log('I am a Slow Test with conditions');
})