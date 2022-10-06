// @ts-checkz
const { expect, default: test, } = require("@playwright/test")  

const homepageElement = '.borderTodo'
const todoInput = '.todo-input'
const todoButton = '.todo-button'
const todoItem = '.todo .todo-item '

module.exports = {
  async openUrl(url) {
        await page.goto(url)
        console.log('I am a dummy function.');
  },

// test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  async newF() {
    await expect(page).toHaveTitle(/Playwright/);
}

//   // create a locator
//   const getStarted = page.locator('text=Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();
  
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
//     }

    // locate the element in the webUI
//    const locator = page.locator(homepageElement)
   // assert that it's visible
//    expect(locator).toBeVisible()

   // get text of the item that is visible in the UI
//    const text = await page.innerText(todoItem)
//    // assert that its name is similar to what we provided
//    expect(text).toBe(item)

      // fill the item that was input from the feature file , to the inputText field in the UI
    //   await page.fill(todoInput , item)
    //   // click the button
    //   await page.click(todoButton)

  }