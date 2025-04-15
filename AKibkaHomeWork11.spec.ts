import { test, expect } from "@playwright/test"
import { beforeEach } from "node:test";
//import { beforeAll } from "node:test"; - for some reson it fails to import



test.describe("Task 1", () => {
    test.beforeEach(async ({page}) => {          // I tired .beforeAll() but it didn't work
        await page.goto("https://example.com/");
    })
    test ("Contains title", async ( {page} ) => {
        const title = await page.title();
        expect (title).toBe('Example Domain');
    })
    test ("URL contains 'example.com' ", async ( {page} ) => {
        const url = page.url();
        expect (url).toContain("example.com");
    })
    test ("Page contains text", async ( {page} ) => {
        const bodyText = await page.textContent('body');
        expect (bodyText).toMatch(/This domain is for use in illustrative examples/);
    })
    test ("Text in <h1>", async ( {page} )=>{
        const heading = await page.locator('h1');
        expect (heading).toHaveText('Example Domain');
    })

});

test.describe("Task 2", () => {
    test.beforeEach(async ({page}) => {          // Same problem here
        await page.goto("https://playwright.dev/");
    })
    test ("URL starts with 'https://playwright.dev' ", async ( {page} ) => {
        const url = page.url();
        expect (url.startsWith('https://playwright.dev')).toBeTruthy();
    })
    test ("Has 'Get strted' link", async ( {page} ) => {
        const links = await page.locator('a:has-text("Get Started")');
        expect (links).toHaveCount(1);
    })    
});

//--------------Task 3------------------

test ("Playwright search in Google", async ( {page} ) => {
    await page.goto ("https://google.com");
    await page.getByTitle ('Search').fill("Playwright");
    await page.keyboard.press ("Enter");
    await expect (page.getByRole ('heading', {name: 'Playwright: Fast and reliable'})).toBeVisible();
});

//--------------Task 4-----------------------------

test ("Navigation", async ( {page} ) => {
    await page.goto ("https://playwright.dev");
    const title = await page.title();
    expect (title).toContain("Playwright");
    await page.click('text=Get started');
    await expect(page).toHaveURL(/.*\/docs/);
});