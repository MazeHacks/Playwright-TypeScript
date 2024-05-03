import { test as setup, expect } from '@playwright/test';
import testData from '../Pages/testdata.json';

const standardUserFile = testData.authFilePath.standardUser;

setup('authenticate as standard user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com/');
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator("#shopping_cart_container")).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: standardUserFile });
});

const problemUserFile = testData.authFilePath.problemUser;

setup('authenticate as problem user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com/');
  await page.fill("#user-name", "problem_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button")
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator("#shopping_cart_container")).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: problemUserFile });
});

const performanceGlitchUserFile = testData.authFilePath.performanceGlitchUser;

setup('authenticate as performance glitch user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com/');
  await page.fill("#user-name", "performance_glitch_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button")
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator("#shopping_cart_container")).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: performanceGlitchUserFile });
});

const errorUserFile = testData.authFilePath.errorUser;

setup('authenticate as error user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com/');
  await page.fill("#user-name", "error_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button")
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator("#shopping_cart_container")).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: errorUserFile });
});

const visualUserFile = testData.authFilePath.visualUser;

setup('authenticate as visual user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com/');
  await page.fill("#user-name", "visual_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button")
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator("#shopping_cart_container")).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: visualUserFile });
});
