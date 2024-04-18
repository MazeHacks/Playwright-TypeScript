import { Page, expect } from "@playwright/test";

export default class Verification {

    // Constructor definition
    constructor(public page: Page) {};

    // Page-Title Verification
    async verifyPageTitle(title: string) {

        await expect(this.page).toHaveTitle(title);
    }

    // Text Verification
    async verifyText(locator: string, text: string) {

        await expect(this.page.locator(locator)).toHaveText(text);
    }

}
