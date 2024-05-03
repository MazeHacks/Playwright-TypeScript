import { test, expect } from '@playwright/test';
import ProductsPage from '../Pages/productsPage';
import HelpingFunctions from '../Pages/helpingFunctions';
import testData from '../Pages/testdata.json';

test.describe(() => {
    test.use({ storageState: testData.authFilePath.standardUser });

    /* Check all Items are presented */
    test('02_01_Check All Items', async ({ page }) => {

        // Constructing Classes
        const productsPage = new ProductsPage(page);

        // Test Process
        const productsList = await productsPage.getProducts();

        // Verification
        expect(productsList.length).toEqual(6); //Verify number of products
    });

    /* Check product information */
    test.skip('02_02_Check Product Information', async ({ page }) => {

        // Constructing Classes
        const productsPage = new ProductsPage(page);
        const helpingFunctions = new HelpingFunctions(page);

        // Test Process
        await expect(productsPage.getProducts).toEqual(6); //Verify number of products


        // Verification
        await helpingFunctions.verifyText(".title", "Products");

    });
})
