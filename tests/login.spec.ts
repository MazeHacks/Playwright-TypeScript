import { test } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import HelpingFunctions from '../Pages/helpingFunctions';
import * as Constants from '../Pages/constants';

// Module constants
const constants = Constants;

        /* Successful Login*/
test('01_01_Successful Login', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await login.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Verification
    await helpingFunctions.verifyText(".title", "Products");
})

        /* Failed Login*/
test('01_02_Failed Login', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await login.loginWithUsername(constants.standardUser, "invalid");

    // Verification
    await helpingFunctions.verifyText(constants.loginErrorMessageLocator, constants.failedLoginMessage);
})

        /* Locked User */
test('01_03_Locked User', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await login.loginWithUsername(constants.lockedoutUser, constants.globalPassword);

    // Verification
    await helpingFunctions.verifyText(constants.loginErrorMessageLocator, constants.lockedUserError);
})