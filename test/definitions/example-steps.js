const TestPageObject = require('../pageobjects/test-pageobject')
const {Given} = require('@cucumber/cucumber')

Given('I navigate to {string}', async function (url) {
   console.log('alo');
   await TestPageObject.openUrl(url);
 });

// When('the user adds {string} to the todo list using the webUI',async function (item) {
// })

// Then('card {string} should be displayed on the webUI',async function (item) {
// })