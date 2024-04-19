import { Page, expect } from "@playwright/test";

export default class Verification {

    // Constructor definition
    constructor(public page: Page) {};

    // Login Page Title Verification
    async verifyLoginPageTitle() {

        await expect(this.page).toHaveTitle("Swag Labs");
    }

    // "About" Link Landing Page Title Verification
    async verifyAboutLinkPageTitle() {

        await expect(this.page).toHaveTitle("Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing");
    }

    // Twitter Page Title Verification
    async verifyTwitterPageTitle() {

        await expect(this.page).toHaveTitle("Sauce Labs (@saucelabs) / X");
    }

    // Facebook Page Title Verification
    async verifyFacebookPageTitle() {

        await expect(this.page).toHaveTitle("Sauce Labs | San Francisco CA | Facebook");
    }

    // LinkedIn Page Title Verification
    async verifyLinkedInPageTitle() {

        await expect(this.page).toHaveTitle("Sauce Labs | LinkedIn");
    }

    // Add to Cart Verification
    async verifyProductAddedToCart(product: string) {

        await expect(this.page.locator(product)).toBeVisible();
    }

    // Remove from Cart Verification
    async verifyProductRemovedFromCart(product: string) {

        await expect(this.page.locator(product)).toHaveCount(0);
    }

    // Text Verification
    async verifyText(locator: string, text: string) {

        await expect(this.page.locator(locator)).toHaveText(text);
    }

}
