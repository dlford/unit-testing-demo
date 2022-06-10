/* eslint-disable no-restricted-syntax */

import multiply from './multiply';

describe('multiply function', () => {
	it('Multiplies all provided numbers', () => {
		const result = multiply(1, 2, 3, 4, 5, 6, 7, 8);

		// Be careful when testing, it's easy to introduce
		// the same bug in your test as your actual code, in
		// this case the test passes, but the multiply function
		// is not working correctly.
		let total = 0;
		for (const number of [1, 2, 3, 4, 5, 6, 7, 8]) {
			total *= number;
		}

		expect(result).toBe(total);

		// It's good practice to include at least one
		// test that has a hard coded answer
		// expect(result).toBe(6);

		// Or get creative and test for some
		// common outputs of failed outputs
		// expect(result).not.toBe(0);
	});
});
