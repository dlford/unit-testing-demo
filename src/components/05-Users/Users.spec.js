import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Users from './Users';

// Create some mock data
const mockUsers = [
	{
		id: 1,
		username: 'potato',
	},
	{
		id: 7,
		username: 42,
	},
	{
		id: 3,
		username: new Date(Date.now()).toLocaleString(),
	},
];

// Since the 'getUsers' function is async, we need to mock the
// response separately, we'll use it down below to pause the
// test until execution has finished
const mockPromise = Promise.resolve(mockUsers);

// Mock the hook file, the default function is 'useApi', which
// returns an object containing 'getUsers', which should return
// our moce response from above
jest.mock('./useApi', () => ({
	__esModule: true,
	default: () => ({
		getUsers: () => mockPromise,
	}),
}));

describe('Users Component', () => {
	it('Renders a list of users', async () => {
		render(<Users />);

		// Wait for the mocked response to resolve before checking the
		// assertions, otherwise we would not see the data rendered yet
		await act(async () => {
			await mockPromise;
		});

		// Assert that all mocked users' usernames are in the document
		mockUsers.forEach(({ username }) => {
			const expr = new RegExp(username, 'i');
			expect(screen.getByText(expr)).toBeInTheDocument();
		});
	});
});
