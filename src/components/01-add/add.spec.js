import add from './add';

// Describe what you're testing
describe('add function', () => {
	// It (does/does not) do...?
	it('Adds all provided numbers', () => {
		// Execute a test and capture the result
		const result = add(1, 2, 3);

		// Make assertions about the result, if these assertions
		// are not true, the test will fail.
		expect(result).toBe(6);

		// We can make as many assertions as we need to
		expect(result).not.toBe('potato');
	});

	// We can write multiple tests to cover
	// as many scenarios as needed, try to
	// to think about ways it could fail and
	// test them all

	/*
	it('Discards non-numeric input', () => {
		const input = [1, 'a', 3];
		const result = add(...input);
		expect(result).toBe(4);
	});

	it('Discards NaN input', () => {
		const input = [1, NaN, 3];
		const result = add(...input);
		expect(result).toBe(4);
	});
	*/
});
