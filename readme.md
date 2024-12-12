# Cypress Test Suite 

This test suite contains Cypress tests to validate two main user flows
1 - New User Registration
2 - Course Enrollment 

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Cypress](https://www.cypress.io/) installed. You can install it using the command `npm install cypress --save-dev`. It will install the latest version. 

This test suite has used v13.6.6 using `npm install cypress@13.6.6`

## Running the Tests

1. Clone this repository:
   `git clone <repository-url>`
2. Navigate to the project directory `cd <project-directory>`
3. Install dependencies: `npm install`
4. Open Cypress: `npx cypress open`
5. In the Cypress Test Runner, click on the test spec (verifyNewUserAccount.ts) to run.


## Notes

- Followed page object design pattern
- I have used disposable email id for the new user email use case. It might be expired by the time you test it. Please insert a new email id for the <Email> key in cypress.env.json file to test it. 


## Project Structure

```

AUTOMATION-PROJECT
└── cypress
    └── e2e
        └── verifyCourseEnrollment.ts
        └── verifyNewUserAccount.ts
    └── cypress.config.ts