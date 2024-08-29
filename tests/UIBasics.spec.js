const {test, expect} = require('@playwright/test');


//  Test case, Name and fuction
/* Since javascript is asynchronous , await has to be used before every step and teh fuction has to
 marked async */
 // To make browser is playwright fixture wrap it in curly braces.
test('Browser Context PlayWright Test', async ({browser}) =>
{
    // To open a new browser and a new page, usually used when it needs cookie
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

 
});

test('First PlayWright Test', async ({browser,page}) =>
{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});