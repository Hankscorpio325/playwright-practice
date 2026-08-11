import { Page, Locator } from "@playwright/test";

export class LoginPage {
    private readonly usernametextbox: Locator;
    private readonly passwordtextbox: Locator;
    private readonly loginbutton: Locator;

    constructor(page: Page) {
        this.usernametextbox = page.getByRole('textbox', { name: 'Username' });
        this.passwordtextbox = page.getByRole('textbox', { name: 'Password' });
        this.loginbutton = page.getByRole('button', { name: 'Login' });
    }

    async fillUsername() {
        await this.usernametextbox.fill('standard_user');
    }

    async fillPassword() {
        await this.passwordtextbox.fill('secret_sauce');
    }

    async clickOnLoginButton() {
        await this.loginbutton.click();
    }
}




