import { test } from "@playwright/test";

import ProductsPage from "../Pages/productsPage";
import CartPage from "../Pages/cartPage";
import HelpingFunctions from "../Pages/helpingFunctions";
import testData from '../Pages/testdata.json';

test.describe(() => {
    test.use({ storageState: testData.authFilePath.standardUser });

    /* Checkout Process */
    test("04_01_Successful Checkout", async ({ page }) => {

        // Constructing Classes and defining base constants
        const cartPage = new CartPage(page);
        const helpingFunctions = new HelpingFunctions(page);
        const productsPage = new ProductsPage(page);

        // Test Process
        await productsPage.addToCart(testData.productsPage.backpack.add);
        await productsPage.navigateToCart();
        await cartPage.checkout();
        await cartPage.enterCheckoutData("Moataz", "Tester", "1010");


        // Verification
        await helpingFunctions.verifyText("[data-test='title']", "Checkout: Overview");
        await productsPage.verifyProductAddedToCart(testData.productsPage.backpack.label);
        await page.click("#finish");
        await helpingFunctions.verifyText("[data-test='complete-header']", "Thank you for your order!");
    });

    /* Checkout without First Name */
    test("04_02_Checkout Missing First Name", async ({ page }) => {

        // Constructing Classes and defining base constants
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const helpingFunctions = new HelpingFunctions(page);

        // Test Process
        await productsPage.addToCart(testData.productsPage.backpack.add);
        await productsPage.navigateToCart();
        await cartPage.checkout();
        await cartPage.enterCheckoutData("", "Tester", "1010");


        // Verification
        await helpingFunctions.verifyText(testData.checkoutPage.errorMessage.locator, "Error: First Name is required");
    });

    /* Checkout without Last Name */
    test("04_03_Checkout Missing Last Name", async ({ page }) => {

        // Constructing Classes and defining base constants
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const helpingFunctions = new HelpingFunctions(page);

        // Test Process
        await productsPage.addToCart(testData.productsPage.backpack.add);
        await productsPage.navigateToCart();
        await cartPage.checkout();
        await cartPage.enterCheckoutData("Tester", "", "1010");


        // Verification
        await helpingFunctions.verifyText(testData.checkoutPage.errorMessage.locator, "Error: Last Name is required");
    });

    /* Checkout without Postal Code */
    test("04_04_Checkout Missing Postal Code", async ({ page }) => {

        // Constructing Classes and defining base constants
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const helpingFunctions = new HelpingFunctions(page);

        // Test Process
        await productsPage.addToCart(testData.productsPage.backpack.add);
        await productsPage.navigateToCart();
        await cartPage.checkout();
        await cartPage.enterCheckoutData("Tester", "Tester", "");


        // Verification
        await helpingFunctions.verifyText(testData.checkoutPage.errorMessage.locator, "Error: Postal Code is required");
    });

    /* Checkout with alphabetic postal code */
    test.skip("04_05_Checkout with Alphabetic Postal Code", async ({ page }) => {

        // Constructing Classes and defining base constants
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const helpingFunctions = new HelpingFunctions(page);

        // Test Process
        await productsPage.addToCart(testData.productsPage.backpack.add);
        await productsPage.navigateToCart();
        await cartPage.checkout();
        await cartPage.enterCheckoutData("Tester", "Tester", "Test");


        // Verification
        await helpingFunctions.verifyText(testData.checkoutPage.errorMessage.locator, "Error");
    });
});
