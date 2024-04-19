import { test, expect } from '../fixtures/pomFixtures'

test('Login Conduit test using POM', async ({ page, landingPage, homePage, signInPage, settingsPage }) => {
    await page.goto('https://react-redux.realworld.io/');
    await landingPage.clickSignInButton();
    await signInPage.enterEmailId("playwrightdemo@gmail.com");
    await signInPage.enterPasswordId("playwrightdemo");
    await signInPage.clickSignInButton();
    await homePage.clickSettingsButton();
    await settingsPage.clickLogoutButton();
    await page.close();
});