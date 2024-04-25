import { Page, expect } from "@playwright/test";

export default class HelpingFunctions {

    // Constructor definition
    constructor(public page: Page) {};

    // Text Verification
    async verifyText(locator: string, text: string) {
        await expect(this.page.locator(locator)).toHaveText(text);
    }

}
