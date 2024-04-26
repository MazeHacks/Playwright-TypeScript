import { test } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import HelpingFunctions from '../Pages/helpingFunctions';
import testData from '../Pages/testdata.json';

        /* Successful Login*/
test('01_01_Successful Login', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.globalPassword);

    // Verification
    await helpingFunctions.verifyText(".title", "Products");
})

        /* Failed Login*/
test('01_02_Failed Login', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.invalidPassword);

    // Verification
    await helpingFunctions.verifyText(testData.loginPage.errorMessage.locator, testData.loginPage.errorMessage.failedLogin);
})

        /* Locked User */
test('01_03_Locked User', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const helpingFunctions = new HelpingFunctions(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);

    // Test Process
    await loginPage.loginWithUsername(testData.loginPage.lockedoutUser, testData.loginPage.globalPassword);

    // Verification
    await helpingFunctions.verifyText(testData.loginPage.errorMessage.locator, testData.loginPage.errorMessage.lockedoutUser);
})