import { test } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import BurgerMenu from '../Pages/burgerMenu';
import * as Constants from '../Pages/constants';

// Module constants
const constants = Constants;

/* About Link */
test('06_02_About Link', async ({ page, baseURL }) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const burgerMenuPage = new BurgerMenu(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await burgerMenuPage.clickAboutLink();

    // Verification
    await burgerMenuPage.verifyAboutLinkPageTitle();

})

/* Logout */
test('06_03_Logout Link', async ({ page, baseURL }) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    const burgerMenuPage = new BurgerMenu(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(constants.standardUser, constants.globalPassword);

    // Test Process
    await burgerMenuPage.logout();

    // Verification
    await loginPage.verifyLoginPageTitle();

})