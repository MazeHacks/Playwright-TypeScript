import { test } from "@playwright/test";

import LoginPage from "../Pages/loginPage";
import ProductsPage from "../Pages/productsPage";
import CartPage from "../Pages/cartPage";
import HelpingFunctions from "../Pages/helpingFunctions";
import * as Constants from '../Pages/constants';

// Module constants
const constants = Constants;

    /* Checkout Process */
test("04_01_Successful Checkout", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await productsPage.addToCart(constants.firstProductAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("Moataz", "Tester", "1010");


    // Verification
    await helpingFunctions.verifyText("[data-test='title']", "Checkout: Overview");
    await productsPage.verifyProductAddedToCart(constants.firstProductLabel);
    await page.click("#finish");
    await helpingFunctions.verifyText("[data-test='complete-header']", "Thank you for your order!");
});

    /* Checkout without First Name */
test("04_02_Checkout Missing First Name", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await productsPage.addToCart(constants.firstProductAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("", "Tester", "1010");


    // Verification
    await helpingFunctions.verifyText(constants.checkoutErrorMessageLocator, "Error: First Name is required");
});

    /* Checkout without Last Name */
test("04_03_Checkout Missing Last Name", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await productsPage.addToCart(constants.firstProductAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("Tester", "", "1010");


    // Verification
    await helpingFunctions.verifyText(constants.checkoutErrorMessageLocator, "Error: Last Name is required");
});

    /* Checkout without Postal Code */
test("04_04_Checkout Missing Postal Code", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await productsPage.addToCart(constants.firstProductAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("Tester", "Tester", "");


    // Verification
    await helpingFunctions.verifyText(constants.checkoutErrorMessageLocator, "Error: Postal Code is required");
});

    /* Checkout with alphabetic postal code */
test("04_05_Checkout with Alphabetic Postal Code", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await productsPage.addToCart(constants.firstProductAddBtn);
    await productsPage.navigateToCart();
    await cartPage.checkout();
    await cartPage.enterCheckoutData("Tester", "Tester", "Test");


    // Verification
    await helpingFunctions.verifyText(constants.checkoutErrorMessageLocator, "Error");
});
