# cypress-workshop
Repository to keep Cypress.io workshop content

### Installation

You will need to setup Node.js latest version!
Once you have it use below instruction to install Cypress.

Make sure you have opened `3_cypress` directory in your IDE!
Then use the commands below:
```sh
$ npm install // This will install Cypress on your local machine.
```
To open the Test Runner simply use:
```sh
$ npm test
```
To run the tests headlessly:
```sh
$ npm start
```
To run and record the tests you will need to setup your own project in Cypress Test Runner and replace the `--key` value in package.json.
Follow this link to see how to do it:

https://docs.cypress.io/guides/core-concepts/dashboard-service.html#Projects

Once you have your project setup, run this command:
```sh
$ npm run record
```
