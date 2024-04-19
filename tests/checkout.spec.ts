import { test } from "@playwright/test";

import LoginPage from "../Pages/loginPage";
import ProductsPage from "../Pages/productsPage";
import Verification from "../Pages/verification";
import CartPage from "../Pages/cartPage";

// Login Constants
const standardUser = "standard_user";
const validPassword = "secret_sauce";

// Product Constants
const productLabel = "#item_4_title_link";
const productAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';

// Checkout missing data error
const errorMessageLocator = '[data-test="error"]';

    /* Checkout Process */
test("04_01_Successful Checkout", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(productAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("Moataz", "Tester", "1010");


    // Verification
    await verification.verifyText("[data-test='title']", "Checkout: Overview");
    await verification.verifyProductAddedToCart(productLabel);
    await page.click("#finish");
    await verification.verifyText("[data-test='complete-header']", "Thank you for your order!");
});

    /* Checkout without First Name */
test("04_02_Checkout Missing First Name", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(productAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("", "Tester", "1010");


    // Verification
    await verification.verifyText(errorMessageLocator, "Error: First Name is required");
});

    /* Checkout without Last Name */
test("04_03_Checkout Missing Last Name", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(productAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("Tester", "", "1010");


    // Verification
    await verification.verifyText(errorMessageLocator, "Error: Last Name is required");
});

    /* Checkout without Postal Code */
test("04_04_Checkout Missing Postal Code", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(productAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("Tester", "Tester", "");


    // Verification
    await verification.verifyText(errorMessageLocator, "Error: Postal Code is required");
});

    /* Checkout with alphabetic postal code */
test("04_05_Checkout with Alphabetic Postal Code", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(productAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("Tester", "Tester", "Test");


    // Verification
    await verification.verifyText(errorMessageLocator, "Error");
});
