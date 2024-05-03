import { Page, expect } from "@playwright/test";

export default class LoginPage {

    // Constructor definition
    constructor(public page: Page) {
        //this.goto();
    };

    /*async goto(){
        await this.page.goto('/');
    }*/

    // Login with username and password
    async loginWithUsername(username: string, password: string) {

        await this.page.fill("#user-name", username);
        await this.page.fill("#password", password);
        await this.page.click("#login-button");

    }

    // Login Page Title Verification
    async verifyLoginPageTitle() {
        await expect(this.page).toHaveTitle("Swag Labs");
    }
}