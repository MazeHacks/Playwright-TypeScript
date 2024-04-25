import { Page, expect } from "@playwright/test";

export default class BurgerMenu {

    // Constructor definition
    constructor(public page: Page) {
    };

    // Click the "About" Link
    async clickAboutLink() {
        await this.page.click("#react-burger-menu-btn");
        await this.page.click("#about_sidebar_link");
    }

    // "About" Link Landing Page Title Verification
    async verifyAboutLinkPageTitle() {
        await expect(this.page).toHaveTitle("Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing");
    }

    // Logout Link
    async logout() {
        await this.page.click("#react-burger-menu-btn");
        await this.page.click("#logout_sidebar_link");
    }
}