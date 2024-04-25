import { Page, expect } from "@playwright/test";

export default class ProductsPage {

    // Constructor definition
    constructor(public page: Page) { };

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



}