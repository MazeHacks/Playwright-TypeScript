import { test, expect } from '@playwright/test';
import ProductsPage from '../Pages/productsPage';
import Verification from '../Pages/helpingFunctions';
import LoginPage from '../Pages/loginPage';
import * as Constants from '../Pages/constants';

// Module constants
const constants = Constants;

        /* Check all Items are presented */
test('02_01_Check All Items', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    const productsList = await productsPage.getProducts();

    // Verification
    await verification.verifyText(".title", "Products");
    expect(productsList.length).toEqual(6); //Verify number of products
})

        /* Check product information */
test.skip('02_02_Check Product Information', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await expect(productsPage.getProducts).toEqual(6); //Verify number of products


    // Verification
    await verification.verifyText(".title", "Products");

})

