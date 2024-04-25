import { test } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import Verification from '../Pages/helpingFunctions';

// Module constants
const standardUser = "standard_user";
const validPassowrd = "secret_sauce";
const invalidPassword = "secret";
const lockedUser = "locked_out_user";

        /* Successful Login*/
test('01_01_Successful Login', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const verification = new Verification(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await login.loginWithUsername(standardUser, validPassowrd);

    // Verification
    await verification.verifyText(".title", "Products");
})

        /* Failed Login*/
test('01_02_Failed Login', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const verification = new Verification(page);
    const errorMessage = "Epic sadface: Username and password do not match any user in this service"
    const errorMessageLocator = ".error-message-container.error h3";

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await login.loginWithUsername(standardUser, invalidPassword);

    // Verification
    await verification.verifyText(errorMessageLocator, errorMessage);
})

        /* Locked User */
test('01_03_Locked User', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const verification = new Verification(page);
    const errorMessage = "Epic sadface: Sorry, this user has been locked out."
    const errorMessageLocator = ".error-message-container.error h3";

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await login.loginWithUsername(lockedUser, validPassowrd);

    // Verification
    await verification.verifyText(errorMessageLocator, errorMessage);
})