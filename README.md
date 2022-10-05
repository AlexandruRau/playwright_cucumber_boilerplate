### A boilerplate for Playwright with cucumber, using the pageobject model

## Run Command:
yarn test -t @test

# Command breakdown:
yarn -> package + project manager, executes commands
test -> this is the name of the script to run, which can be found in package.json, in "scripts"
-t ---> this is short for --tags, which specifies which tag the runner should look for (it requires you to specify one)

# Script breakdown:
cucumber-js -------------------------> essential; this is the run command, it points to ./node_modules/.bin/cucumber-js
--require cucumber.conf.js ----------> essential; this allows cucumber.conf.js to be picked up and its options used
--require test/definitions/*.js -----> essential; this tells the runner where to find the definitions
test --------------------------------> essential; this specifies what folder to look in for the feature files; if desired, you can give it a specific feature file, like "test/features/Example.feature" (but this is easier done via tags)
--format @cucumber/pretty-formatter -> this adds the test steps to the console output as the test runs
--publish-quiet ---------------------> this removes a console output on how to view cucumber reports; if you remove "quiet" and leave just "--publish", Cucumber will automatically generate a report and link it in the console

You can run "yarn cucumber-js --help" for the full list of supporting commands

# Useful:
--retry <NUMBER_OF_RETRIES>      specify the number of times to retry failing test cases (default: 0)
--retry-tag-filter <EXPRESSION>  only retries the features or scenarios with tags matching the expression (repeatable).
This option requires '--retry' to be specified.

## Run Command:


Inside that directory, you can run several commands:

  yarn playwright test
    Runs the end-to-end tests.

  yarn playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  yarn playwright test example
    Runs the tests in a specific file.

  yarn playwright test --debug
    Runs the tests in debug mode.

  yarn playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    yarn playwright test

And check out the following files:
  - ./src/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨
