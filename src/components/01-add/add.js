/* eslint-disable no-restricted-syntax */

// ESLint doesn't like my sloppy code here,
// the comment above disables the rule that
// was triggered

// We are going to test this function with Jest,
// an assertion library for JavaScript and TypeScript.
// Take a look at `add.spec.js` to see the test implementation

/**
 * Adds all numbers passed in
 * @param {...number} args One or more numbers
 * @returns {number} Total of all passed numbers
 * @example
 * const total = add(1,2,3); // returns 6
 */

export default function add(...args) {
	let result = 0;

	for (const arg of args) {
		result += arg;
	}

	return result;
}
