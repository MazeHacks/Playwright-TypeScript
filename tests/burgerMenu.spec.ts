import { test } from '@playwright/test';
import LoginPage from '../Pages/loginPage';
import ProductsPage from '../Pages/productsPage';
import testData from '../Pages/testdata.json';

/* About Link */
test.describe(() => {
    test.use({ storageState: testData.authFilePath.standardUser });

    test('06_02_About Link', async ({ page }) => {

        // Constructing Classes
        const productsPage = new ProductsPage(page);

        // Test Process
        await productsPage.clickAboutLink();

        // Verification
        await productsPage.verifyAboutLinkPageTitle();

    })

    /* Logout */
    test('06_03_Logout Link', async ({ page }) => {

        // Constructing Classes
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        // Test Process
        await productsPage.logout();

        // Verification
        await loginPage.verifyLoginPageTitle();

    })
})