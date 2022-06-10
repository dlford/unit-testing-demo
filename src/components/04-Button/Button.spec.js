import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
	it('Runs provided action when clicked', async () => {
		// Create a simple mock function
		const mockAction = jest.fn();

		// Create a user instance
		const user = userEvent.setup();

		// Render the button with our mock function
		// This time we're importing 'screen' from the testing library
		// as well, it works the same as before, just a different syntax
		render(
			<Button action={mockAction}>button_test_element</Button>,
		);

		// Test that the function was not run yet
		expect(mockAction).not.toHaveBeenCalled();

		// Click the button
		await user.click(screen.getByText('button_test_element'));

		// Test that the function was run
		expect(mockAction).toHaveBeenCalled();
	});
});
