import { Page, expect } from "@playwright/test";

export default class SocialMediaLinks {

    // Constructor definition
    constructor(public page: Page) {
    };

    // Twitter Link
    async clickTwitterLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_twitter")
        ])

        return newtab;
    }

    // Twitter Page Title Verification
    async verifyTwitterPageTitle() {
        await expect(this.page).toHaveTitle("Sauce Labs (@saucelabs) / X");
    }

    // Facebook Link
    async clickFacebookLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_facebook")
        ])

        return newtab;
    }

    // Facebook Page Title Verification
    async verifyFacebookPageTitle() {
        await expect(this.page).toHaveTitle("Sauce Labs | San Francisco CA | Facebook");
    }

    // LinkedIn Link
    async clickLinkedInLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_linkedin")
        ])

        return newtab;
    }

    // LinkedIn Page Title Verification
    async verifyLinkedInPageTitle() {
        await expect(this.page).toHaveTitle("Sauce Labs | LinkedIn");
    }
}