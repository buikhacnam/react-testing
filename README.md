## Get started

Run the following commands to install the dependencies and start the project:

```bash
yarn
yarn dev
```

Username: `johndoe` | Password: `s3cret`


## Why you should test your React app

- You can make sure that your app works as expected
- Safeguard against unwanted behavior when changes are made
- Automated, and thus efficient on the long run

## What to test
1. High value features
2. Edge cases in high value features
3. Things that are easy to break
4. Basic React component testing
	- User interaction
	- Conditional Rendering
	- Utility functions / hooks



## Unit Testing and Integration Testing
-	Unit testing: test a single function, component, or class in isolation
-	Integration testing: test multiple units together

We use `jest` and `react-testing-library` for unit testing and integration testing to test:
	- Edge cases in high value features
	- Things that are easy to break
	- Basic React component testing
		- User interaction
		- Conditional Rendering
		- Utility functions / hooks

Please check the following component for integration testing examples:

https://github.com/buikhacnam/react-testing/blob/main/src/components/TransactionCreateStepTwo.test.js

## End-to-end Testing

We use `cypress` for end-to-end testing to test high value features

Install `cypress`

```bash
yarn add -D cypress @testing-library/cypress
```

Open cypress

```bash
yarn cypress open
```

In the cyprss folder, go to `e2e` folder, create a new file `payment_spec.cy.js`

Start writing the test

```js
describe('Login', () => {
	it('should login an existing user', () => {
		//  login
		cy.visit('http://localhost:3000/signin')
		cy.findByRole('textbox', { name: /username/i }).type('johndoe')
		cy.findByLabelText(/password/i).type('s3cret')
		cy.findByRole('checkbox', { name: /remember me/i }).check()
		cy.findByRole('button', { name: /sign in/i }).click()
	})
})
```
And run the test on the cypress window

* use `Testing Playground` Chrome extension can help to find the element

## References
https://github.com/cypress-io/cypress-realworld-app

https://github.com/MitchelSt/react-testing-starter