import { Page } from "@playwright/test";

export default class ProductsPage {

    // Constructor definition
    constructor(public page: Page) {};

    // Get Products
    async getProducts() {

        return this.page.$$(".inventory_item");
    }

    // Add product to Cart
    async addToCart(product: string) {

        await this.page.click(product);
    }

    // Remove product from Cart
    async removeFromCart(product: string) {

        await this.page.click(product);
    }
    
    // Navigate to Cart
    async navigateToCart() {

        await this.page.click('[data-test="shopping-cart-link"]');
    }

    // Continue Shopping
    async continueShopping() {

        await this.page.click("#continue-shopping");
    }
    

    // Click the "About" Link
    async clickAboutLink() {
        await this.page.click("#react-burger-menu-btn");
        await this.page.click("#about_sidebar_link");
    }

    // Logout Link
    async logout() {
        await this.page.click("#react-burger-menu-btn");
        await this.page.click("#logout_sidebar_link");
    }

    // Twitter Link
    async clickTwitterLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_twitter")
        ])

        return newtab;
    }

    // Facebook Link
    async clickFacebookLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_facebook")
        ])

        return newtab;
    }

    // LinkedIn Link
    async clickLinkedInLink() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(".social_linkedin")
        ])

        return newtab;
    }
}