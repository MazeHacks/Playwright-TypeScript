import { Page } from "@playwright/test";

export default class CartPage {

    // Constructor definition
    constructor(public page: Page) {
    };

    // Checkout
    async checkout() {

        await this.page.click("#checkout")
    }


    // Enter Customer Data for Checkout
    async enterCheckoutData(firstname: string, lastname: string, postalCode: string) {

        await this.page.fill("#first-name", firstname);
        await this.page.fill("#last-name", lastname);
        await this.page.fill("#postal-code", postalCode);
        await this.page.click("#continue")
    }

}