import { test } from "@playwright/test";

import LoginPage from "../Pages/loginPage";
import ProductsPage from "../Pages/productsPage";
import CartPage from "../Pages/cartPage";
import BurgerMenu from "../Pages/burgerMenu";
import * as Constants from '../Pages/constants';

// Module constants
const constants = Constants;

        /* Adding Product to Cart */
test("03_01_Add To Cart", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await productsPage.addToCart(constants.firstProductAddBtn);
    await productsPage.navigateToCart();


    // Verification
    await productsPage.verifyProductAddedToCart(constants.firstProductLabel);
});

        /* Check Cart After Changing the Order */
test("03_02_Check Cart after Changing Order", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await productsPage.addToCart(constants.firstProductAddBtn);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(constants.firstProductLabel); // Verify first Product added
    await cartPage.continueShopping();
    await productsPage.removeFromCart(constants.firstProductRemoveBtn);
    await productsPage.addToCart(constants.secondProductAddBtn);    

    // Verification
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(constants.secondProductLabel); // Verify second Product added
    await productsPage.verifyProductRemovedFromCart(constants.firstProductLabel); // Verify first Product Removed

});

        /* Check Cart After Logout/Login */
test("03_03_Check Cart after Log out", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const burgerMenu = new BurgerMenu(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await productsPage.addToCart(constants.firstProductAddBtn);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(constants.firstProductLabel); // Verify first Product added
    await cartPage.continueShopping();
    await productsPage.removeFromCart(constants.firstProductRemoveBtn);
    await productsPage.addToCart(constants.secondProductAddBtn);
    await burgerMenu.logout();

    // Verification
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(constants.secondProductLabel); // Verify second Product added
    await productsPage.verifyProductRemovedFromCart(constants.firstProductLabel); // Verify first Product Removed

});