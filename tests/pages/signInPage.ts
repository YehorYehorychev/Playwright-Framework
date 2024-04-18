import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class SignInPage extends BasePage {
    readonly page: Page;
    private readonly emailIdTextBox: Locator;
    private readonly passwordIdTextBox: Locator;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailIdTextBox = page.locator('input[placeholder="Email"]');
        this.passwordIdTextBox = page.locator('input[placeholder="Password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }

    async enterEmailId(emailId: string) {
        await this.fillFormField(this.emailIdTextBox, emailId)
    }

    async enterPasswordId(passwordId: string) {
        await this.fillFormField(this.passwordIdTextBox, passwordId)
    }

    async clickSignInButton() {
        await this.clickElement(this.signInButton)
    }
}