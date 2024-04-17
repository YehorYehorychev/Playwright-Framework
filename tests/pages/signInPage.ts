import { Locator, Page } from "@playwright/test";

export class SignInPage {
    readonly page: Page;
    readonly emailIdTextBox: Locator;
    readonly passwordIdTextBox: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.emailIdTextBox = page.locator('input[placeholder="Email"]');
        this.passwordIdTextBox = page.locator('input[placeholder="Password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }

    async enterEmailId(emailId: string) {
        await this.emailIdTextBox.fill(emailId);
    }

    async enterPasswordId(passwordId: string) {
        await this.passwordIdTextBox.fill(passwordId);
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }
}