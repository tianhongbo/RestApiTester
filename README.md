# RestApiTester
A lightweight RESTful API tester powered by frisby.js. It's easy to intergrate with CI tools like Jekins etc.

# Instruction
Frisby is a REST API testing framework built on node.js and Jasmine that makes testing API endpoints easy, fast, and fun. 
Frisby requires both node.js and NPM to be installed on your system, and is installable as an NPM package.
Frisby is built on top of the Jasmine BDD framework, and uses the jasmine-node test runner to run spec tests.

# How to install?
## install frisby

`npm install --save-dev frisby`

## install jasmine-node
use -g as parameters here.

`npm install -g jasmine-node`

# How to write test case?
Jasmine-node has convention of considering all test case files with "spce.js" appendix. E.g: 
api1001_spec.js
api1002_spce.js

# How to run testing?
For instance, all the test cases are stored under "account/api/" folder.

`jasmine-node account/api/`

# Resources
http://frisbyjs.com/
