import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.frameLocator('iframe[name="callout"]').getByLabel('Stay signed out').click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('ruby pro');
  await page.getByText('gramming language', { exact: true }).click();
  await page.getByRole('link', { name: 'Ruby Programming Language Ruby Programming Language https://www.ruby-lang.org' }).click();
  await page.getByRole('link', { name: 'Read More...' }).click();
  await page.getByRole('link', { name: 'Ruby A Programmer\'s Best' }).click();
  await page.close();
});