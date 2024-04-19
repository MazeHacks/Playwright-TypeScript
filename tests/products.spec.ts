import { test, expect } from '@playwright/test';
import ProductsPage from '../Pages/productsPage';
import Verification from '../Pages/verification';
import LoginPage from '../Pages/loginPage';

        /* Check all Items are presented */
test('02_01_Check All Items', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername("standard_user", "secret_sauce");

    // Test Process
    await expect(productsPage.getProducts).toEqual(6); //Verify number of products


    // Verification
    await verification.verifyText(".title", "Products");

})

        /* Check product information */
test('02_02_Check Product Information', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername("standard_user", "secret_sauce");

    // Test Process
    await expect(productsPage.getProducts).toEqual(6); //Verify number of products


    // Verification
    await verification.verifyText(".title", "Products");

})

