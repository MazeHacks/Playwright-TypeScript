import { Page, expect } from "@playwright/test";

export default class ProductsPage {

    // Constructor definition
    constructor(public page: Page) { 
        this.goto();
    };

    // goto
    async goto(){
        await this.page.goto('inventory.html');
    }

    // Get Products
    async getProducts() {
        await Promise.all([
            this.page.waitForEvent("load")
        ]);
        
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

    // Add to Cart Verification
    async verifyProductAddedToCart(product: string) {
        await expect(this.page.locator(product)).toBeVisible();
    }

    // Remove from Cart Verification
    async verifyProductRemovedFromCart(product: string) {
        await expect(this.page.locator(product)).toHaveCount(0);
    }

    // Navigate to Cart
    async navigateToCart() {
        await this.page.click('[data-test="shopping-cart-link"]');
    }

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