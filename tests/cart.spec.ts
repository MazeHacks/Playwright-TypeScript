import { test } from "@playwright/test";

import LoginPage from "../Pages/loginPage";
import ProductsPage from "../Pages/productsPage";
import CartPage from "../Pages/cartPage";
import BurgerMenu from "../Pages/burgerMenu";
import testData from '../Pages/testdata.json';

        /* Adding Product to Cart */
test("03_01_Add To Cart", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.globalPassword);

    // Test Process
    await productsPage.addToCart(testData.productsPage.backpack.add);
    await productsPage.navigateToCart();


    // Verification
    await productsPage.verifyProductAddedToCart(testData.productsPage.backpack.label);
});

        /* Check Cart After Changing the Order */
test("03_02_Check Cart after Changing Order", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.globalPassword);

    // Test Process
    await productsPage.addToCart(testData.productsPage.backpack.add);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(testData.productsPage.backpack.label);
    await cartPage.continueShopping();
    await productsPage.removeFromCart(testData.productsPage.backpack.remove);
    await productsPage.addToCart(testData.productsPage.bikeLight.add);    

    // Verification
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(testData.productsPage.bikeLight.label); // Verify second Product added
    await productsPage.verifyProductRemovedFromCart(testData.productsPage.backpack.label); // Verify first Product Removed

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
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.globalPassword);

    // Test Process
    await productsPage.addToCart(testData.productsPage.backpack.add);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(testData.productsPage.backpack.label);
    await cartPage.continueShopping();
    await productsPage.removeFromCart(testData.productsPage.backpack.remove);
    await productsPage.addToCart(testData.productsPage.bikeLight.add);    
    await burgerMenu.logout();

    // Verification
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.globalPassword);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(testData.productsPage.bikeLight.label); // Verify second Product added
    await productsPage.verifyProductRemovedFromCart(testData.productsPage.backpack.label); // Verify first Product Removed

});