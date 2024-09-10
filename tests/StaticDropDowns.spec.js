const {test, expect} = require('@playwright/test');

test("UI Controls", async ({browser, page}) =>{

// Locator to select the static drop down.
    const dropdown= page.locator("select.form-control");

// Locator to select the blinking text.
    const documentLink = page.locator("[href*='documents-request']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("learning");
    
// Using the selectionOption method to select the value in the drop down.
    await dropdown.selectOption("consult")
   

// Locator and the last method to select the last radio button.
    await page.locator(".radiotextsty").last().click();

// to click on the okay buuton on the pop-up
    await page.locator("#okayBtn").click();

// Assertion to check if the users radio button is clicked which is the last radio button.
    expect(page.locator(".radiotextsty").last()).toBeChecked();

// Another way to assert via console log is to use the isChecked fuction.
    console.log(await page.locator(".radiotextsty").last().isChecked());

// Checking the terms and conditions check box and assert it.
    await page.locator("#terms").check();
    expect(page.locator("#terms").isChecked()).toBeTruthy();
    console.log(await page.locator("#terms").isChecked());

// Checking the blinktext class is add to the link that is blinking
    await expect(documentLink).toHaveAttribute("class", "blinkingText");


// Page the signIn to be able to see the correct dropdown and radio button are selected.
    await page.pause();

    await page.locator("#signInBtn").click();
    
    
})