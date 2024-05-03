import { test } from '@playwright/test';
import SocialMediaLinks from '../Pages/socialMediaLinks';
import testData from '../Pages/testdata.json';
import ProductsPage from '../Pages/productsPage';


test.describe(() => {
    test.use({ storageState: testData.authFilePath.standardUser });

    /* Twitter Link */
    test('06_05_Twitter Link', async ({ page }) => {

        // Constructing Classes
        new ProductsPage(page);
        let socialMediaLinksPage = new SocialMediaLinks(page);

        // Test Process
        const newTab = await socialMediaLinksPage.clickTwitterLink();
        socialMediaLinksPage = new SocialMediaLinks(newTab);

        // Verification
        await socialMediaLinksPage.verifyTwitterPageTitle();

    })

    /* Facebook Link */
    test('06_06_Facebook Link', async ({ page }) => {

        // Constructing Classes
        new ProductsPage(page);
        let socialMediaLinksPage = new SocialMediaLinks(page);

        // Test Process
        const newTab = await socialMediaLinksPage.clickFacebookLink();
        socialMediaLinksPage = new SocialMediaLinks(newTab);

        // Verification
        await socialMediaLinksPage.verifyFacebookPageTitle();

    });

    /* LinkedIn Link */
    test('06_07_LinkedIn Link', async ({ page }) => {

        // Constructing Classes
        new ProductsPage(page);
        let socialMediaLinksPage = new SocialMediaLinks(page);

        // Test Process
        const newTab = await socialMediaLinksPage.clickLinkedInLink();
        socialMediaLinksPage = new SocialMediaLinks(newTab);

        // Verification
        await socialMediaLinksPage.verifyLinkedInPageTitle();

    });
});