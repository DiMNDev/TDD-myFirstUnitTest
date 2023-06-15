Welcome to my first official unit test repo!

For the best experience in VS Code, install the 'mocha test explorer' extension.

To configure the extension for best usability, add this line to your vscode settings.json file.

<!--

"mochaExplorer.files": "myTests/**/*.test.js"

-->

To configure the development environment install the following dependencies.

<!--
 "@sinonjs/referee-sinon": "^11.0.0",
    "chai": "^4.3.7",
    "jsverify": "^0.8.4",
    "mocha": "^10.2.0",
    "request": "^2.88.2", --Deprecated--
    "sinon": "^15.1.2",
    "sinon-chai": "^3.7.0"
-->

Once you have configured your enviornment, you should be able to use the testing sidebar inside VS Code.

In this project I have broken it down into examples:

Example-1 demonstrates a single test.
Example-2 demonstrates a single test suite.
Example-3 demonstrates nested test suites.
Example-4 demonstrates before & after setup code.
Example-5 demonstrates beforeEach/afterEach : setup/teardown code.
Example-6 demonstrates beforeEach/afterEach : setup/teardown code defined at root.
Example-7 demonstrates async, await, and promises in tests
Examples-8 & Examples-9 demonstrate the principles of TDD:

- Writing failing unit tests (redPhase)
- Writing passing production code (greenPhase)
- Refactoring tests/production code to build forward (refactorPhase)

Each (8, 9) have a corresponding file with extensions:
-.test.js
-The test file for the example
-.js
-The production code for the example
-.txt
-The regularly expressed, human readable, steps or guidelines to produce the feature. The idea of the feature if you will.

To run these tests via the command line you can run this line of code here:

<!--
./node_modules/mocha/bin/_mocha -g Example myTests/
-->

To run an individual test via the command line you can run this line of code here with the asterisk replaced with the test you wish to run:

<!--
./node_modules/mocha/bin/_mocha -g Example myTests/
-->
