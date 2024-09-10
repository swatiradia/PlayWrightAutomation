const {test, expect} = require('@playwright/test');
const { text } = require('stream/consumers');

test("Child Window Handling", async ({browser}) =>{

// To open a new browser and a new page, usually used when it needs cookie or to open a child window.

    const context = await browser.newContext();
    const page = await context.newPage();

// Locator to select the blinking text.
    const documentLink = page.locator("[href*='documents-request']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

// Informing about the child window opening befor clicking the link.
// Here we need these step to run synchronously as the click is opening a new page. 
// (Promise.all) is an array that take the no of steps that needs to be performed synchronously.(Three states Rejected, Pending, Fuflfilled)

// Catching the newPage in a array, as the steps may return multiple things.
    const [newPage]=await Promise.all(
    [
        context.waitForEvent('page'),//listeneing to new page (Promise is pending) 

        documentLink.click() //new page is opened.
    ]) 
    
// Printing the text of the new window on the console.
    const text = await newPage.locator(".red").textContent();
    const splitText = text.split("@");
    const username = splitText[1].split(" ")[0];
    console.log(username);

// Going back to the previous page and entering the username.

   await page.locator("#username").fill(username);

   await page.pause();

})