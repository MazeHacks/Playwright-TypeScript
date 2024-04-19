import { test } from "@playwright/test";

import LoginPage from "../Pages/loginPage";
import ProductsPage from "../Pages/productsPage";
import Verification from "../Pages/verification";

const standardUser = "standard_user";
const validPassword = "secret_sauce";

const firstProductLabel = "#item_4_title_link";
const firstProductAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
const firstProductRemoveBtn= "#remove-sauce-labs-backpack";
const secondProductAddBtn = "#add-to-cart-sauce-labs-bike-light";
const secondProductLabel = "#item_0_title_link";


        /* Adding Product to Cart */
test("03_01_Add To Cart", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(firstProductAddBtn);
    await productsPage.navigateToCart();


    // Verification
    await verification.verifyProductAddedToCart(firstProductLabel);
});

        /* Check Cart After Changing the Order */
test("03_02_Check Cart after Changing Order", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(firstProductAddBtn);
    await productsPage.navigateToCart();
    await verification.verifyProductAddedToCart(firstProductLabel); // Verify first Product added
    await productsPage.continueShopping();
    await productsPage.removeFromCart(firstProductRemoveBtn);
    await productsPage.addToCart(secondProductAddBtn);    

    // Verification
    await productsPage.navigateToCart();
    await verification.verifyProductAddedToCart(secondProductLabel); // Verify second Product added
    await verification.verifyProductRemovedFromCart(firstProductLabel); // Verify first Product Removed

});

        /* Check Cart After Logout/Login */
test("03_03_Check Cart after Log out", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(firstProductAddBtn);
    await productsPage.navigateToCart();
    await verification.verifyProductAddedToCart(firstProductLabel); // Verify first Product added
    await productsPage.continueShopping();
    await productsPage.removeFromCart(firstProductRemoveBtn);
    await productsPage.addToCart(secondProductAddBtn);
    await productsPage.logout();

    // Verification
    await loginPage.loginWithUsername(standardUser, validPassword);
    await productsPage.navigateToCart();
    await verification.verifyProductAddedToCart(secondProductLabel); // Verify second Product added
    await verification.verifyProductRemovedFromCart(firstProductLabel); // Verify first Product Removed

});