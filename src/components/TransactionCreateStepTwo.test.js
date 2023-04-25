/* eslint-disable prettier/prettier */
// reference: https://youtu.be/OVNjsIto9xM?t=686
import { screen, render } from '@testing-library/react'
import TransactionCreateStepTwo from './TransactionCreateStepTwo'
import userEvent from '@testing-library/user-event'

// Arrange - Act - Assert pattern

// Arrange - setup the component (render it)
// Act - interact with the component (click, type, etc)
// Assert - check if the component is working as expected (check if the pay button is enabled)

// check if the pay button is disabled in initial state
test('check if the pay button is disabled in initial state', async () => {
	// use async here because the button is first enabled and then disabled
	render(
		<TransactionCreateStepTwo
			sender={{
				id: '1',
			}}
			receiver={{
				id: '2',
			}}
		/>
	)

	// sreen.debug() will print the html of the component
	// check if the pay button is disabled in initial state
	const payButton = await screen.findByRole('button', { name: /pay/i })
	expect(payButton).toBeDisabled()
})

test('if the amount and note is entered, the pay button should be enabled', async () => {
	render(
		<TransactionCreateStepTwo
			sender={{
				id: '1',
			}}
			receiver={{
				id: '2',
			}}
		/>
	)

	// screen.getByRole('') // print all the roles in the component

	// get element by placeholder
	const amountInput = screen.getByPlaceholderText(/amount/i)
	const noteInput = screen.getByPlaceholderText(/add a note/i)

	// enter amount and note
	userEvent.type(amountInput, '100')
	userEvent.type(noteInput, 'lunch')

	// screen.getByRole('') // check if the amount and note is entered

	// check if the pay button is enabled
	const payButton = await screen.findByRole('button', { name: /pay/i })
	expect(payButton).toBeEnabled()
})


//Integration Test
// describe how a user whould use the app 
test ('if the amount and note is entered, the pay button should be changed from disabled to enabled', async () => {
	render(
		<TransactionCreateStepTwo
			sender={{
				id: '1',
			}}
			receiver={{
				id: '2',
			}}
		/>
	)

	let payButton = await screen.findByRole('button', { name: /pay/i })

	// check if the pay button is disabled in initial state
	expect(payButton).toBeDisabled()

	// get element by placeholder
	const amountInput = screen.getByPlaceholderText(/amount/i)
	const noteInput = screen.getByPlaceholderText(/add a note/i)

	// enter amount and note
	userEvent.type(amountInput, '100')
	userEvent.type(noteInput, 'lunch')

	payButton = await screen.findByRole('button', { name: /pay/i })

	// check if the pay button is enabled
	expect(payButton).toBeEnabled()
})
