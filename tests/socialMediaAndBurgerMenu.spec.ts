import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import Verification from '../Pages/verification';
import ProductsPage from '../Pages/productsPage';

// Module Constants
const standardUser = "standard_user";
const validPassowrd = "secret_sauce";

 /* About Link */
 test('06_02_About Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await login.loginWithUsername(standardUser, validPassowrd);

    // Test Process
    await productsPage.clickAboutLink();

    // Verification
    await verification.verifyAboutLinkPageTitle();

})

 /* Logout */
 test('06_03_Logout Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await login.loginWithUsername(standardUser, validPassowrd);

    // Test Process
    await productsPage.logout();

    // Verification
    await verification.verifyLoginPageTitle();

})

 /* Twitter Link */
 test('06_05_Twitter Link', async ({page, baseURL}) => {

    // Defining context
    //const context = browser.newContext();
    //const page = (await context).newPage();

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await login.loginWithUsername(standardUser, validPassowrd);

    // Test Process
    await productsPage.clickTwitterLink();

    // Verification
    await verification.verifyTwitterPageTitle();

})

 /* Facebook Link */
 test('06_06_Facebook Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await login.loginWithUsername(standardUser, validPassowrd);

    // Test Process
    await productsPage.clickFacebookLink();

    // Verification
    await verification.verifyFacebookPageTitle();

})

 /* LinkedIn Link */
 test('06_07_LinkedIn Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await login.loginWithUsername(standardUser, validPassowrd);

    // Test Process
    await productsPage.clickLinkedInLink();

    // Verification
    await verification.verifyLinkedInPageTitle();

})