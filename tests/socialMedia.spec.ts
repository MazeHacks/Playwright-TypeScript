import { test } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import SocialMediaLinks from '../Pages/socialMediaLinks';
import testData from '../Pages/testdata.json';

 /* Twitter Link */
 test('06_05_Twitter Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    let socialMediaLinksPage = new SocialMediaLinks(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.globalPassword);

    // Test Process
    const newTab = await socialMediaLinksPage.clickTwitterLink();
    socialMediaLinksPage = new SocialMediaLinks(newTab);

    // Verification
    await socialMediaLinksPage.verifyTwitterPageTitle();

})

 /* Facebook Link */
 test('06_06_Facebook Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    let socialMediaLinksPage = new SocialMediaLinks(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.globalPassword);

    // Test Process
    const newTab = await socialMediaLinksPage.clickFacebookLink();
    socialMediaLinksPage = new SocialMediaLinks(newTab);

    // Verification
    await socialMediaLinksPage.verifyFacebookPageTitle();

})

 /* LinkedIn Link */
 test('06_07_LinkedIn Link', async ({page, baseURL}) => {

    // Constructing Classes and defining base constants
    const loginPage = new LoginPage(page);
    let socialMediaLinksPage = new SocialMediaLinks(page);

    // Pre-Conditions
    await page.goto(`${baseURL}`);
    await loginPage.loginWithUsername(testData.loginPage.standardUser, testData.loginPage.globalPassword);

    // Test Process
    const newTab = await socialMediaLinksPage.clickLinkedInLink();
    socialMediaLinksPage = new SocialMediaLinks(newTab);

    // Verification
    await socialMediaLinksPage.verifyLinkedInPageTitle();

})