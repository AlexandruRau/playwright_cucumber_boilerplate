### A boilerplate for Playwright with JS, cucumber, using the pageobject model

Hi!

Please make sure to read the **Important notes** section below. If you encounter any issues, please reach out to me on Slack or via email (alexandru.rau@lola.tech) 

## Run Commands:
yarn test -t @test
  Runs the tests from the feature iles.
yarn playwright codegen
  Opens a window where codegen will generate code for the actions you perform in real time (note you need to copy it by hand afterwards).
yarn cucumber-js --help
  Shows all the supporting cucumber commands.

# Main command breakdown:
yarn     package + project manager, executes commands
test     this is the name of the script to run, which can be found in package.json, in "scripts"
-t       this is short for --tags, which specifies which tag the runner should look for (it requires you to specify one)
@test    tag commonly used when writing tests; append it to your scenario to get it to be picked up or simply change it to whatever other tag you need to run

# Script breakdown:
cucumber-js                            essential; this is the run command, it points to ./node_modules/.bin/cucumber-js
--require cucumber.conf.js             essential; this allows cucumber.conf.js to be picked up and its options used
--require test/definitions/*.js        essential; this tells the runner where to find the definitions
test                                   essential; this specifies what folder to look in for the feature files; if desired, you can give it a specific   feature file, like "test/features/Example.feature" (but this is easier done via tags)
--format @cucumber/pretty-formatter    this adds the test steps to the console output as the test runs
--publish-quiet                        this removes a console output on how to view cucumber reports; if you remove "quiet" and leave just "--publish", Cucumber will automatically generate a report and link it in the console

# Noteworthy:
--retry <NUMBER_OF_RETRIES>      specify the number of times to retry failing test cases (default: 0)
--retry-tag-filter <EXPRESSION>  only retries the features or scenarios with tags matching the expression (repeatable).
This option requires '--retry' to be specified.

## Important notes:

You cannot use `import` in this project, work using `require` with`module exports`. Read more about this here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
