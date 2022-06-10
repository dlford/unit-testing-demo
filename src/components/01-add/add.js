/* eslint-disable no-restricted-syntax */

// ESLint doesn't like my sloppy code here,
// the comment above disables the rule that
// was triggered

// We are going to test this function with Jest,
// an assertion library for JavaScript and TypeScript.
// Take a look at `add.spec.js` to see the test implementation

export default function add(...args) {
	let result = 0;

	for (const arg of args) {
		result += arg;
	}

	return result;
}
