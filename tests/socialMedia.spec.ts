import { test } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import SocialMediaLinks from '../Pages/socialMediaLinks';

// Module Constants
const standardUser = "standard_user";
const validPassowrd = "secret_sauce";

 /* Twitter Link */
 test('06_05_Twitter Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    var socialMediaLinksPage = new SocialMediaLinks(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await login.loginWithUsername(standardUser, validPassowrd);

    // Test Process
    const newTab = await socialMediaLinksPage.clickTwitterLink();
    socialMediaLinksPage = new SocialMediaLinks(newTab);

    // Verification
    await socialMediaLinksPage.verifyTwitterPageTitle();

})

 /* Facebook Link */
 test('06_06_Facebook Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    var socialMediaLinksPage = new SocialMediaLinks(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await login.loginWithUsername(standardUser, validPassowrd);

    // Test Process
    const newTab = await socialMediaLinksPage.clickFacebookLink();
    socialMediaLinksPage = new SocialMediaLinks(newTab);

    // Verification
    await socialMediaLinksPage.verifyFacebookPageTitle();

})

 /* LinkedIn Link */
 test('06_07_LinkedIn Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const login = new LoginPage(page);
    var socialMediaLinksPage = new SocialMediaLinks(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await login.loginWithUsername(standardUser, validPassowrd);

    // Test Process
    const newTab = await socialMediaLinksPage.clickLinkedInLink();
    socialMediaLinksPage = new SocialMediaLinks(newTab);

    // Verification
    await socialMediaLinksPage.verifyLinkedInPageTitle();

})