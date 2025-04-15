import { test, expect } from "@playwright/test"
import { beforeEach } from "node:test";

//--------------Task 1--------------
test ("Verify login with wrong credentials", async ( {page} ) => {
    await page.goto ("https://the-internet.herokuapp.com/login");
    let url = page.url();
    const username = page.getByLabel("Username");
    const password = page.getByLabel("Password");
    await username.fill("user");
    await password.fill("querty");
    await page.locator('button').click();
    //expect (url).toContain("/login");
    expect (username).toBeVisible();
    
    await username.fill("tomsmith");
    await password.fill("SuperSecretPassword!");
    await page.locator('button').click();
    //expect (url).toContain("/secure");
    expect (page.locator('#falsh'));

    await page.locator('a[href="/logout"]').click();
    //expect (url).toContain("/login");
    await page.isVisible('text="You logged out of the secure area!"');
});

//------------------Task 2--------------------

test ("Verify Checkboxes", async ( {page} ) => {
    await page.goto ("https://demo.guru99.com/test/radio.html");
    let checkBox1 = page.locator("#vfb-6-0");
    let checkBox2 = page.locator("#vfb-6-1");
    let checkBox3 = page.locator("#vfb-6-2");
    
    await checkBox1.check();
    await checkBox2.check();
    await checkBox3.check();
    expect (await checkBox1.isChecked()).toBe(true);
    expect (await checkBox2.isChecked()).toBe(true);
    expect (await checkBox3.isChecked()).toBe(true);

    await checkBox1.uncheck();
    await checkBox2.uncheck();
    await checkBox3.uncheck();
    expect (await checkBox1.isChecked()).toBe(false);
    expect (await checkBox2.isChecked()).toBe(false);
    expect (await checkBox3.isChecked()).toBe(false);   
    
});

//--------------------Task 3------------------------------

test ("Verify iFrame", async ( {page} ) => {
    await page.goto ("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select");
    const iframe = page.frameLocator('#iframeResult');
    await iframe.locator('#cars').selectOption('Saab');
    const selectedValue = await iframe.locator('#cars').inputValue();
    expect(selectedValue).toBe('saab');
    await iframe.getByText('submit').click();
    expect (iframe.locator("h1")).toHaveText('Submitted Form Data');

});

//--------------------------------Task 4--------------------

test ("Verify Form", async ( {page} ) => {
    await page.goto ("https://formy-project.herokuapp.com/form");
    const firstName = page.locator('#first-name');
    const lastName = page.locator('#last-name');
    const jobTitle = page.locator('#job-title');
    await firstName.fill('Sam');
    await lastName.fill('Robertson');
    await jobTitle.fill('Test Automation Engineer');
    await page.locator('#radio-button-2').check();
    await page.locator('#checkbox-1').check();
    await page.locator('#select-menu').selectOption('5-9');
    await page.locator('#datepicker').fill('14/12/2024');
    await page.getByRole('button').click();
    expect (page.getByRole('alert')).toHaveText('The form was successfully submitted!');

});

//---------------Task 5-------------------------

test ("Verify Form", async ( {page} ) => {
    await page.goto ("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    await page.getByAltText('Phones & PDAs').click();
    expect (page.locator('.breadcrumb-item')).toHaveText('Phones & PDAs');
    await page.getByPlaceholder('Minimum Price').fill('135');
    await page.getByPlaceholder('Maximum Price').fill('165');
    await page.keyboard.press('Enter');
    //.........In progress.......

});