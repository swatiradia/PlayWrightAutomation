const {test, expect} = require('@playwright/test');


//  Test case, Name and fuction
/* Since javascript is asynchronous , await has to be used before every step and the fuction has to
 marked async */
 // To make sure browser is playwright fixture wrap it in curly braces.

test('Browser Context PlayWright Test', async ({browser}) =>
{
    // To open a new browser and a new page, usually used when it needs cookie.

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
});

/* In this test page fixture is also mentioned in the fuction attributes, so the page initialization is not required. */

test('First PlayWright Test', async ({browser,page}) =>
{
    await page.goto("https://google.com");
    console.log(await page.title());
// Assertion to check the page title.
    await expect(page).toHaveTitle("Google");

});

// To check the login functionality of the rahulshettyacademy website.

test('Login Functionality', async ({browser, page}) =>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("learning");
    await page.locator("#signInBtn").click();

}); 


// To check the login validation message on incorrect user/password.

test('Login validation on incorrect user/password', async ({browser, page}) =>
{
    const username = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
// Wrong username , to get the error.

    await username.fill("rahulshetty");
    await page.locator("[name='password']").fill("learning");
    await page.locator("#signInBtn").click();
// Print the error message to console.

    console.log(await page.locator("[style*='block']").textContent());
// Assertion to check the message has the same text. 

    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.")
    await username.fill("rahulshettyacademy");
    await page.locator("#signInBtn").click();

}); 

// To getting all the phone titles 

test('Getting all the phone titles', async ({browser, page}) =>
{
    const username = page.locator("#username");
    const password = page.locator("[name='password']");
    const signInButton = page.locator("#signInBtn");
    const phonetitles = page.locator(".card-title a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill("rahulshettyacademy");
    await password.fill("learning");
    await signInButton.click();
// Getting the title on first phone

    // console.log(await phonetitles.nth(0).textContent());
 // Getting the title on all the phones

    console.log(await phonetitles.allTextContents());

});
