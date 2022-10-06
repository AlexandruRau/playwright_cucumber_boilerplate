// this is the runner that's used in this repo

const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

// setDefaultTimeout(60000)

const config = {
   testDir: './test',
   /* Maximum time one test can run for. */
   timeout: 10,
   expect: {
      /* Maximum time expect() should wait for the condition to be met.*/
     timeout: 30 * 1000
   }
}


// launch the browser
BeforeAll(async function () {
   global.browser = await chromium.launch({
       headless: false,
       slowMo: 1000,
   });
});

// close the browser
AfterAll(async function () {
   await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
   // viewport <null|Object> Emulates consistent viewport for each page. Defaults to an 1280x720 viewport. null disables the default viewport.
   global.context = await global.browser.newContext({viewport: null});
   global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
   // await page.screenshot({ path: 'latest.png', fullPage: true });
   await global.page.close();
   await global.context.close();
});

module.exports = config;