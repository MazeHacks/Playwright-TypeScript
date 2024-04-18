import { Page } from "@playwright/test";

export default class ProductsPage {

    // Constructor definition
    constructor(public page: Page) {};

    // Get Products
    /*async getProducts() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}), 
        ])
        const products = this.page.$$(".inventory_item");
        return products;
    }*/

    async clickAboutLink() {
        await this.page.click("#react-burger-menu-btn");
        await this.page.click("#about_sidebar_link");
    }

    async logout() {
        await this.page.click("#react-burger-menu-btn");
        await this.page.click("#logout_sidebar_link");
    }

    async clickTwitterLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_twitter")
        ])

        return newtab;
    }

    async clickFacebookLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_facebook")
        ])

        return newtab;    }

    async clickLinkedInLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_linkedin")
        ])

        return newtab;    }
}