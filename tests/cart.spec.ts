import { test } from "@playwright/test";

import LoginPage from "../Pages/loginPage";
import ProductsPage from "../Pages/productsPage";
import CartPage from "../Pages/cartPage";
import BurgerMenu from "../Pages/burgerMenu";

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

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(firstProductAddBtn);
    await productsPage.navigateToCart();


    // Verification
    await productsPage.verifyProductAddedToCart(firstProductLabel);
});

        /* Check Cart After Changing the Order */
test("03_02_Check Cart after Changing Order", async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(firstProductAddBtn);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(firstProductLabel); // Verify first Product added
    await cartPage.continueShopping();
    await productsPage.removeFromCart(firstProductRemoveBtn);
    await productsPage.addToCart(secondProductAddBtn);    

    // Verification
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(secondProductLabel); // Verify second Product added
    await productsPage.verifyProductRemovedFromCart(firstProductLabel); // Verify first Product Removed

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
    await loginPage.loginWithUsername(standardUser, validPassword);

    // Test Process
    await productsPage.addToCart(firstProductAddBtn);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(firstProductLabel); // Verify first Product added
    await cartPage.continueShopping();
    await productsPage.removeFromCart(firstProductRemoveBtn);
    await productsPage.addToCart(secondProductAddBtn);
    await burgerMenu.logout();

    // Verification
    await loginPage.loginWithUsername(standardUser, validPassword);
    await productsPage.navigateToCart();
    await productsPage.verifyProductAddedToCart(secondProductLabel); // Verify second Product added
    await productsPage.verifyProductRemovedFromCart(firstProductLabel); // Verify first Product Removed

});