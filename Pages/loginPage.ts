import { Page } from "@playwright/test";

export default class LoginPage {

    // Constructor definition
    constructor(public page: Page) {
    };

    // Login with username and password
    async loginWithUsername(username: string, password: string) {

        await this.page.fill("#user-name", username);
        await this.page.fill("#password", password);
        await this.page.click("#login-button")

    }

}