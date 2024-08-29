const {test, expect} = require('@playwright/test');

test.only('Login into client App', async ({browser,page}) =>
{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("swati@radia.com");
    await page.locator("#userPassword").fill("Swati@radia1");
    await page.locator("#login").click();

// Getting the first product title.
// console.log(await page.locator(".card-body b").nth(0).textContent());

// To wait until all the network calls are made and it is in idle state. (this method is flaky)
    await page.waitForLoadState("networkidle");

/* To wait until the locator is visible. But only works for unique element so for list of elements use
first() method */
// await page.locator(".card-body b").first().waitFor();

// Getting all the products titles.
    console.log(await page.locator(".card-body b").allTextContents());

});